---
layout: project
title: "NoiseBotAI: Deep Learning Models for Urban Acoustic Scene Classification"

challenge: >
  Atelier 7Hz, an engineering firm specializing in acoustics and vibrations, faces significant labor costs from manually processing and classifying urban audio recordings used to assess and monitor environmental noise levels. To address this challenge, Atelier 7Hz partnered with Polytechnique Montréal on an R&D project to automate this process using edge-compatible deep-learning models for urban sound classification. The project aims to support the commercialization of AI-powered urban microphones by developing and evaluating a range of trained models offering different trade-offs between classification accuracy and model size. Sébastien Leclaire's research laboratory at Polytechnique Montréal was tasked with developing these models.

approach: >
  We developed an end-to-end model training and compression pipeline that fine-tunes and ensembles up to eight state-of-the-art Transformer models to create a high-accuracy teacher model. This ensemble then guides a knowledge distillation process, transferring its learned representations to a smaller student model. Finally, post-training quantization further reduces the student model's size and computational requirements, preparing it for deployment on resource-constrained edge devices.

contribution: >
  I joined the project as an intern alongside Matéo, whose master's thesis focused on this work. Previous iterations had established a complete pipeline based on a simple 1D CNN architecture. My contributions included reviewing, selecting, and implementing the eight Transformer models evaluated in the project, as well as designing and implementing the entire quantization module. This work involved critically reviewing over 50 research papers, significantly expanding the project's knowledge base to support future iterations.

figures:
  - image: /images/projects/noisebotai/atelier_7hz_cover.jpeg
    caption: "Image taken from linkedin.com/company/atelier-7hz/?originalSubdomain=ca"

results: >
  Our eight Transformer implementations successfully reproduced the reference results reported in their respective papers on public benchmark datasets. The best-performing teacher ensembles surpassed state-of-the-art results on selected datasets, while knowledge distillation improved the performance of compact student models. Post-training quantization further reduced model size substantially, with manageable accuracy degradation, bringing the resulting models closer to deployment on resource-constrained edge devices. The project remains ongoing, with further development underway following my departure. A research paper to which I am a co-author is also in preparation and will be referenced here upon publication.

repository: "https://github.com/leclaire-polymtl/NoiseBotAI"
---