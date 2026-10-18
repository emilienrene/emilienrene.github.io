---
layout: project
title: "Wind Tunnel Validation of AI-Accelerated Optimized Airfoil"

challenge: >
  Can an AI predictor accurately predict the maximum lift of an optimized airfoil near stall, and deliver the performance promised by its design?

approach: >
  Following the ASME V&V 20 validation framework, a wind-tunnel experiment was conducted to validate the predicted maximum lift coefficient ($C_{L,\max}$) of an airfoil optimized for subsonic flow, targeting takeoff conditions. A physical prototype was fabricated using stereolithography additive manufacturing, followed by polishing and surface coating to ensure geometric fidelity and a smooth finish. Experimental lift measurements were then compared against AI predictions to assess their accuracy near stall, where surrogate models are known to perform poorly.

contribution: >
  I designed the experiment and prototype from end-to-end, and conducted the experiments at the subsonic wind-tunnel of Polytechnique Montreal.

results: >
  The experimental lift and drag curves showed partial agreement with AI predictions, supporting the feasibility of the validation approach within the project's scope. The measured $C_{L,\max}$ was $1.28$ at an angle of attack of $16^\circ\$, exceeding the predicted value of $1.18$ and occurring $3^\circ\$ later. This discrepancy is consistent with the limitations of RANS-trained models, which tend to smooth out flow separation and stall phenomena. This discrepancy is consistent with the limitations of RANS-trained surrogate models, which tend to smooth out flow separation and stall phenomena. However, confidence in the results was limited by prototype manufacturing imperfections, insufficient structural rigidity, and measurement uncertainties. Resonance-induced vibrations further restricted testing to lower-than-takeoff speeds, with full aerodynamic curves obtained at 18.9 m/s. Consequently, the results provide an initial assessment of predictive accuracy under the tested conditions rather than definitive validation of takeoff performance.

figures:
  - image: /images/projects/airfoil-validation/prototype.png
    caption: "Airfoil prototype manufactured using SLA 3D printing, polishing and surface coating"
  - image: /images/projects/airfoil-validation/wind-tunnel.jpg
    caption: "Depiction of myself conducting the wind-tunnel experiments"
  - image: /images/projects/airfoil-validation/curve.png
    caption: "Lift-Angle of attack curve obtained for an airspeed of 18.9 m/s"

Additional technical details, figures, equations, or references can go here.