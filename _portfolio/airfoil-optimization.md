---
layout: project
title: "Parametric Study of Metaheuristics and Geometric Parameterizations for Airfoil Optimization"

challenge: >
  Despite their growing use, the relative performance of different metaheuristic search algorithms (MSAs), and their interactions with geometric parameterization methods, remain insufficiently understood. Existing studies provide limited guidance on how these two components should be jointly selected, particularly across highly representative design spaces. This gap calls for a systematic benchmark to uncover which combinations work best, and why. 

approach: >
  Metaheuristic search algorithms (MSAs) are investigated for early-stage aerodynamic optimization due to their parallelizability and compatibility with surrogate models. Five MSAs, spanning evolutionary- and swarm-based approaches, are evaluated alongside five geometric parameterization methods, spanning constructive and deformative approaches. A deep learning surrogate model provides low-cost aerodynamic predictions, enabling near-instantaneous evaluations. The resulting 25 optimizer–parameterization combinations are compared across two case studies: partially and fully constrained drag minimization. Results are averaged across random seeds to account for the stochastic nature of MSAs. 

  The study's contributions are twofold:

  1. **Comparative evaluation:** It investigates how geometric parameterization influences the performance and convergence of five widely used metaheuristic search algorithms (MSAs).
  
  2. **Reproducible benchmark:** It establishes a systematic, reproducible $5 \times 5$ benchmark to guide the joint selection of geometric parameterization methods and MSAs for airfoil shape optimization.


figures:
  - image: /images/projects/airfoil-optimization/airfoils_25_constrained.png
    caption: "Visual depiction of the 25 best-performing airfoils across seeds in the fully-constrained case study"

  - image: /images/projects/airfoil-optimization/matrix_constrained.png
    caption: "Obtained performance matrix in the fully constrained case study, with objective reduction corresponding to drag reduction relative to the optimization baseline, the DAE11 airfoil, and values reported as confidence intervals."

results: >
  The benchmark reveals that optimizer performance depends strongly on the geometric parameterization method and the imposed design constraints. CMA-ES consistently performs well, while the fastest-converging methods do not necessarily yield the best aerodynamic solutions. The findings highlight the importance of jointly selecting optimizers and parameterizations for effective airfoil optimization.
repository: https://github.com/emilienrene/metaheuristics_for_airfoil_shape_optimization

contribution: >
  I developed the full codebase from end to end, conducted all studies, and wrote the full manuscript.
---