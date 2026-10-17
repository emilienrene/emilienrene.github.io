---
layout: project
title: "Parametric Study of Metaheuristics and Geometric Parameterizations for Airfoil Optimization"

challenge: >
  In Airfoil Shape Optimization (ASO), the choice of optimizer cannot be made independently of the choice of geometric parameterization method, yet the interactions of these two components of an ASO framework have been undercharacterized in past literature.

approach: >
  Metaheuristic search algorithms (MSAs) are investigated for early-stage aerodynamic optimization due to their parallelizability and compatibility with surrogate models. Five MSAs, spanning evolutionary- and swarm-based approaches, are evaluated alongside five geometric parameterization methods, spanning constructive and deformative approaches. A deep learning surrogate model provides low-cost aerodynamic predictions, enabling near-instantaneous evaluations. The resulting 25 optimizer–parameterization combinations are compared across two case studies: partially and fully constrained drag minimization. Results are averaged across random seeds to account for the stochastic nature of MSAs. 

contribution: >
  I developed the full codebase from end to end, conducted all studies, and wrote the full manuscript.

figures:
  - image: /images/projects/airfoil-optimization/airfoils_25_constrained.pdf
    caption: "Visual depiction of the 25 best-performing airfoils across seeds in the fully-constrained case study"
    alt: "Placeholder for airfoil optimization visualization"

  - image: /images/projects/airfoil-optimization/matrix_constrained.pdf
    caption: "Obtained performance matrix in the fully-constrained case study"
    alt: "Placeholder for airfoil optimization visualization"

results: >
  The benchmark reveals that optimizer performance depends strongly on the geometric parameterization method and the imposed design constraints. CMA-ES consistently performs well, while the fastest-converging methods do not necessarily yield the best aerodynamic solutions. The findings highlight the importance of jointly selecting optimizers and parameterizations for effective airfoil optimization.
repository: ""
---

Additional technical details, figures, equations, or references can go here.