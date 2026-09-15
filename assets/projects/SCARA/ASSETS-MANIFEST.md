# SCARA project page — asset manifest

Drop files into `assets/projects/SCARA/` using these exact names/subfolders so
`project-scara-arm.html` picks them up automatically (nothing else needs to
change on the page — until an image exists at its path, the site shows a
labelled placeholder box instead, same as the other project pages).

## img/

| File | Used for |
|---|---|
| `hero_heart_trace.gif` | Hero / Demonstration — arm drawing the heart trace |
| `fk_derivation.jpg` | Theory — hand-derived forward kinematics |
| `ik_derivation.jpg` | Theory — hand-derived inverse kinematics |
| `cad_final_render.png` | Arm Linkage & Part Design — final SolidWorks render |
| `simscape_3d_render.png` | Arm Linkage & Part Design — Simscape Multibody Explorer render |
| `rbt_model_diagram.png` | Simulink Model (part 1) — rigid body tree diagram |
| `full_simulink_model_pid.png` | Simulink Model (part 2) — full closed-loop model diagram |
| `arduino_wiring_diagram.png` | Communication — Arduino/servo wiring diagram |
| `circle_commanded_vs_actual.png` | Results — circle path overlay |
| `circle_joint_angles.png` | Results — circle joint-angle plot |
| `demo_circle_clip.gif` | Results — short "proof it works" clip of the arm drawing the circle |
| `rectangle_commanded_vs_actual.png` | Results — rectangle path overlay |
| `rectangle_joint_angles.png` | Results — rectangle joint-angle plot |
| `heart_commanded_vs_actual.png` | Results — heart path overlay |
| `heart_joint_angles.png` | Results — heart joint-angle plot |

## sim/

| File | Used for |
|---|---|
| `RBT_SCARA.slx` | Download card — kinematic-verification model (Input Motion, no controller) |
| `RBT_SCARA_closed_loop.slx` | Download card — closed-loop model (Real Part RBT + dual PID + 3-shape switch) |
| `Servo_On_Nano.slx` | Download card — Arduino deployment model |

## cad/

| File | Used for |
|---|---|
| `scara-arm-step-files.zip` | Download card — Base.step, Link1.step, Link2.step bundled together |

## docs/

| File | Used for |
|---|---|
| `motor-selection-calc.pdf` | Download card — torque budget calc behind the Motor Selection section |
| `note-on-robotic-arm.pdf` | Download card — source PDF the Results plots were pulled from |

Renaming any file is fine — just update the matching `src`/`href` in
`project-scara-arm.html` (search for the old filename) to match.
