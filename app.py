from flask import Flask, request, render_template
from transformers import pipeline, AutoTokenizer
from optimum.onnxruntime import ORTModelForSequenceClassification
from utils.data_utils import EmotionDetectionDataset

app = Flask(__name__)

# Instantiate model, load Tokenizer and Config
quantized_dir = "model/"

model = ORTModelForSequenceClassification.from_pretrained(quantized_dir, file_name="model_quantized.onnx")
tokenizer = AutoTokenizer.from_pretrained(quantized_dir)
cls_pipeline = pipeline("text-classification", model=model, tokenizer=tokenizer)

def print_result(result):
  actual_label = EmotionDetectionDataset.INDEX2LABEL
  predicted_label = int(result[0]['label'][-1])
  label = actual_label[predicted_label]
  score = result[0]['score']
  final_result = [label, score]
  return final_result

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/',methods=['POST'])
def predict():
    text = request.form.get('user_input')
    results = cls_pipeline(text)
    output = print_result(results)[0]
    # score = print_result(results)[1]

    return render_template('index.html', input_text=text, output_text=output)


if __name__ == "__main__":
    app.run(debug=False)
