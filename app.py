import gradio as gr

name = "models/azizp128/emotion-predictor-indobert"
alias = "Emotion Predictor with IndoBERT"
descriptions = "Emotion Predictor adalah aplikasi yang dapat memprediksi 6 jenis emosi yang muncul dalam sebuah kalimat, yaitu marah, sedih, senang, cinta, takut, dan jijik."
examples = [["Rumah itu sangat menakutkan karena sudah lama tidak dihuni orang."]]

demo = gr.Interface.load(name=name, description=descriptions, examples=examples, alias=alias)

if __name__ == "__main__":
    demo.launch()
