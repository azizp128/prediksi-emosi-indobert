import gradio as gr
import torch
from transformers import pipeline

name = "models/azizp128/emotion-predictor-indobert"
title = "Prediksi Emosi"
descriptions = "Emotion Predictor adalah aplikasi yang dapat memprediksi 6 jenis emosi yang muncul dalam sebuah kalimat, yaitu marah, sedih, senang, cinta, takut, dan jijik."
article = """#### Note: Refresh halaman jika stuck di proses prediksi."""
examples = [["Rumah itu sangat menakutkan karena sudah lama tidak dihuni orang."],
            ["Aku senang sekali, karena hari ini ulang tahunku."],
            ["Bahagia hatiku melihat pernikahan putri sulungku yang cantik jelita."],
            ["Aku tidak suka dan merasa jijik jika melihat jenis makanan seperti itu."],
            ["Dasar anak sialan!! Kurang ajar!!"],
            ["Sepertinya dia sedang sedih hari ini."]]

# Select GPU if available, otherwise CPU
device = 0 if torch.cuda.is_available() else -1

# Load the model using pipeline
pipe = pipeline("sentiment-analysis",
                model="azizp128/prediksi-emosi-indobert", device=device, torch_dtype=torch.float16)


# Define the function for prediction
def predict_emotion(text):
    result = pipe(text)
    return {res["label"]: res["score"] for res in result}


# Define the Gradio interface
interface = gr.Interface(
    fn=predict_emotion,
    inputs="text",
    outputs="label",
    title=title, description=descriptions, article=article, examples=examples, flagging_mode="auto"
)

if __name__ == "__main__":
    # Launch the app
    interface.launch()
