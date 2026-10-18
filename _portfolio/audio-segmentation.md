---
layout: project
title: "Semantic Audio Segmentation for Archive Transcription (In Progress)"

challenge: >
  The current version of [Evoka](https://ecal.ch/en/feed/projects/8835/evoka-ii/) can provide users with curated historical audio archives from the Swiss canton of Fribourg. However, because only short audio segments can be shared, longer recordings were divided using fixed-length segmentation. This approach can cut across conversations, potentially compromising the semantic quality of the embeddings used to retrieve segments through semantic search. This gap calls for a smarter way to segment audio recordings along meaningful topical boundaries.

approach: >
  Several methods are being investigated to divide long audio recordings into segments that each cover a coherent topic. Three approaches are compared: audio-only, which identifies topic changes directly from sound patterns; transcription-based, which converts speech into text before identifying topic changes; and multimodal, which combines information from the audio and its textual representation. These approaches are being explored following a comprehensive literature review.

contribution: >
  Starting from a multi-modal data processing codebase developed by the Swiss Data Science Center, my work integrates as a submodule to their repository, and can reprocess the audio data.

figures:
  - image: /images/projects/semantic-audio/flowchart.png
    caption: "Tentative flowchart representation of the pipeline approaches investigated"

  ### References for the Figure

  - Ghinassi, Iacopo, Matthew Purver, Huy Phan, and Chris Newell. “Exploring Pre-Trained Neural Audio Representations for Audio Topic Segmentation.” *2023 IEEE International Conference on Multimedia and Expo (ICME)*, July 2023, 1086–91. [https://doi.org/10.1109/ICME55011.2023.00190](https://doi.org/10.1109/ICME55011.2023.00190).

  - Solbiati, Alessandro, Kevin Heffernan, Georgios Damaskinos, Shivani Poddar, Shubham Modi, and Jacques Cali. “Unsupervised Topic Segmentation of Meetings with BERT Embeddings.” *arXiv*, June 24, 2021. [https://doi.org/10.48550/arXiv.2106.12978](https://doi.org/10.48550/arXiv.2106.12978).

results: >
  Ongoing work. Evaluation of the three segmentation approaches is underway.

repository: "https://github.com/emilienrene/semantic_audio_segmentation"
---

Additional technical details, figures, equations, or references can go here.