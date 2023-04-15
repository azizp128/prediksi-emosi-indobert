import gradio as gr

name = "models/azizp128/emotion-predictor-indobert"
title = "Sentence Emotion Predictor App"
descriptions = "Emotion Predictor adalah aplikasi yang dapat memprediksi 6 jenis emosi yang muncul dalam sebuah kalimat, yaitu marah, sedih, senang, cinta, takut, dan jijik."
article = """#### Note: Refresh halaman jika stuck di proses prediksi."""
examples = [["Rumah itu sangat menakutkan karena sudah lama tidak dihuni orang."], 
    ["Aku senang sekali, karena hari ini ulang tahunku."], 
    ["Bahagia hatiku melihat pernikahan putri sulungku yang cantik jelita."], 
    ["Aku tidak suka dan merasa jijik jika melihat jenis makanan seperti itu."],
    ["Dasar anak sialan!! Kurang ajar!!"],
    ["Sepertinya dia sedang sedih hari ini."]]

demo = gr.Interface.load(name=name, title=title, description=descriptions, article=article, examples=examples, allow_flagging="auto")

if __name__ == "__main__":
    demo.launch()
