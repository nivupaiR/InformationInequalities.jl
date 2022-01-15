var documenterSearchIndex = {"docs":
[{"location":"tutorials/entropic2d/#Eigenvalue-computations","page":"Entropic Space","title":"Eigenvalue computations","text":"","category":"section"},{"location":"tutorials/entropic2d/#Eigenvalues-of-interval-matrices","page":"Entropic Space","title":"Eigenvalues of interval matrices","text":"","category":"section"},{"location":"tutorials/entropic2d/","page":"Entropic Space","title":"Entropic Space","text":"Given a (real or complex) interval matrix AinmathbbIC^ntimes n, we define the eigenvalue set ","category":"page"},{"location":"tutorials/entropic2d/","page":"Entropic Space","title":"Entropic Space","text":"mathbfLambda=lambdainmathbbC lambdatext is an eigenvalue of Atext for some AinmathbfA","category":"page"},{"location":"tutorials/entropic2d/","page":"Entropic Space","title":"Entropic Space","text":"While characterizing the solution set mathbfLambda (or even its hull) is computationally challenging, the package offers the function TBD which contains an interval box containing mathbfLambda. ","category":"page"},{"location":"tutorials/entropic2d/","page":"Entropic Space","title":"Entropic Space","text":"note: Note\nAt the moment, eigenbox is not rigorous, that is the computations for the non-interval eigenvalue problem solved internally are carried out using normal non-verified floating point computations.","category":"page"},{"location":"tutorials/entropic2d/","page":"Entropic Space","title":"Entropic Space","text":"To demonstrate the functionality, let us consider the following interval matrix","category":"page"},{"location":"tutorials/entropic2d/","page":"Entropic Space","title":"Entropic Space","text":"using InformationInequalities\n\nA = [3 2 1\n     2 2 2\n     0 1 2]","category":"page"},{"location":"tutorials/entropic2d/","page":"Entropic Space","title":"Entropic Space","text":"To get a qualitative evaluation of the enclosure, we can simulate the solution set of mathbfA using Montecarlo, as it is done in the following example","category":"page"},{"location":"tutorials/entropic2d/","page":"Entropic Space","title":"Entropic Space","text":"using LinearAlgebra;\nusing Random; # hide\nRandom.seed!(42) # hide\nusing Plots\nN = 1000\n\nevalues = zeros(ComplexF64, 4, N)\n\nfor i in 1:N\n    evalues[:, i] = eigvals(rand(4,4))\nend\n\nrpart = real.(evalues)\nipart = imag.(evalues)\n\nplot(; ratio=1, label=\"enclosure\")\nscatter!(rpart[1, :], ipart[1, :]; label=\"λ₁\")\nscatter!(rpart[2, :], ipart[2, :]; label=\"λ₂\")\nscatter!(rpart[3, :], ipart[3, :]; label=\"λ₃\")\nscatter!(rpart[4, :], ipart[4, :]; label=\"λ₄\")\nxlabel!(\"real\")\nylabel!(\"imag\")\nsavefig(\"eigs1.png\") # hide","category":"page"},{"location":"tutorials/entropic2d/","page":"Entropic Space","title":"Entropic Space","text":"(Image: )","category":"page"},{"location":"tutorials/entropic2d/","page":"Entropic Space","title":"Entropic Space","text":"Internally, the generical interval eigenvalue problem is","category":"page"},{"location":"references/#all_ref","page":"References","title":"References","text":"","category":"section"},{"location":"references/#[BAT14]","page":"References","title":"[BAT14]","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"<ul><li>","category":"page"},{"location":"references/","page":"References","title":"References","text":"K.-J. Bathe, Finite Element Procedures, Watertown, USA, 2014.","category":"page"},{"location":"references/","page":"References","title":"References","text":"<li style=\"list-style: none\"><details>\n<summary>bibtex</summary>","category":"page"},{"location":"references/","page":"References","title":"References","text":"@book{Bathe2014,\n\taddress = {Watertown, USA},\n\tauthor = {Bathe, Klaus-J{\\\"{u}}rgen},\n\tedition = {2},\n\ttitle = {{Finite Element Procedures}},\n\tyear = {2014},\n  url  = {https://web.mit.edu/kjb/www/Books/FEP_2nd_Edition_4th_Printing.pdf}\n}","category":"page"},{"location":"references/","page":"References","title":"References","text":"</details></li></ul>","category":"page"},{"location":"references/","page":"References","title":"References","text":"","category":"page"},{"location":"references/#[HLA13]","page":"References","title":"[HLA13]","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"<ul><li>","category":"page"},{"location":"references/","page":"References","title":"References","text":"M. Hladík. Bounds on eigenvalues of real and complex interval matrices. Appl. Math. Comput., 219(10):5584–5591, 2013.","category":"page"},{"location":"references/","page":"References","title":"References","text":"<li style=\"list-style: none\"><details>\n<summary>bibtex</summary>","category":"page"},{"location":"references/","page":"References","title":"References","text":"@article{Hla2013a,\n author = \"Milan Hlad\\'{\\i}k\",\n title = \"Bounds on eigenvalues of real and complex interval matrices\",\n journal = \"Appl. Math. Comput.\",\n fjournal = \"Applied Mathematics and Computation\",\n volume = \"219\",\n number = \"10\",\n pages = \"5584-5591\",\n year = \"2013\",\n issn = \"0096-3003\",\n doi = \"10.1016/j.amc.2012.11.075\",\n}","category":"page"},{"location":"references/","page":"References","title":"References","text":"</details></li></ul>","category":"page"},{"location":"references/","page":"References","title":"References","text":"","category":"page"},{"location":"references/#[HOR19]","page":"References","title":"[HOR19]","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"<ul><li>","category":"page"},{"location":"references/","page":"References","title":"References","text":"J. Horácek, Interval Linear and Nonlinear Systems, PhD dissertation, 2019","category":"page"},{"location":"references/","page":"References","title":"References","text":"<li style=\"list-style: none\"><details>\n<summary>bibtex</summary>","category":"page"},{"location":"references/","page":"References","title":"References","text":"@article{horavcek2019interval,\n  title={Interval linear and nonlinear systems},\n  author={Hor{\\'a}{\\v{c}}ek, Jaroslav},\n  year={2019},\n  publisher={Univerzita Karlova, Matematicko-fyzik{\\'a}ln{\\'\\i} fakulta}\n}","category":"page"},{"location":"references/","page":"References","title":"References","text":"</details></li></ul>","category":"page"},{"location":"references/","page":"References","title":"References","text":"","category":"page"},{"location":"references/#[JAU14]","page":"References","title":"[JAU14]","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"<ul><li>","category":"page"},{"location":"references/","page":"References","title":"References","text":"L. Jaulin and B. Desrochers, Introduction to the algebra of separators with application to path planning, Engineering Applications of Artificial Intelligence 33 (2014): 141-147","category":"page"},{"location":"references/","page":"References","title":"References","text":"<li style=\"list-style: none\"><details>\n<summary>bibtex</summary>","category":"page"},{"location":"references/","page":"References","title":"References","text":"@article{jaulin2014introduction,\n  title={Introduction to the algebra of separators with application to path planning},\n  author={Jaulin, Luc and Desrochers, Beno{\\^\\i}t},\n  journal={Engineering Applications of Artificial Intelligence},\n  volume={33},\n  pages={141--147},\n  year={2014},\n  publisher={Elsevier}\n}","category":"page"},{"location":"references/","page":"References","title":"References","text":"</details></li></ul>","category":"page"},{"location":"references/","page":"References","title":"References","text":"","category":"page"},{"location":"references/#[NEU90]","page":"References","title":"[NEU90]","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"<ul><li>","category":"page"},{"location":"references/","page":"References","title":"References","text":"A. Neumaier, Interval methods for systems of equations, Cambridge university press, 1990","category":"page"},{"location":"references/","page":"References","title":"References","text":"<li style=\"list-style: none\"><details>\n<summary>bibtex</summary>","category":"page"},{"location":"references/","page":"References","title":"References","text":"@book{neumaier1990interval,\n  title={Interval methods for systems of equations},\n  author={Neumaier, Arnold and Neumaier, Arnold},\n  number={37},\n  year={1990},\n  publisher={Cambridge university press}\n}","category":"page"},{"location":"references/","page":"References","title":"References","text":"</details></li></ul>","category":"page"},{"location":"references/","page":"References","title":"References","text":"","category":"page"},{"location":"references/#[OET64]","page":"References","title":"[OET64]","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"<ul><li>","category":"page"},{"location":"references/","page":"References","title":"References","text":"W. Oettli and W. Prager, Compatibility of approximate solution of linear equations with given error bounds for coefficients and right-hand sides, Numerische Mathematik, 6(1):405–409, 1964.","category":"page"},{"location":"references/","page":"References","title":"References","text":"<li style=\"list-style: none\"><details>\n<summary>bibtex</summary>","category":"page"},{"location":"references/","page":"References","title":"References","text":"@article{oettli1964compatibility,\n  title={Compatibility of approximate solution of linear equations with given error bounds for coefficients and right-hand sides},\n  author={Oettli, Werner and Prager, William},\n  journal={Numerische Mathematik},\n  volume={6},\n  number={1},\n  pages={405--409},\n  year={1964},\n  publisher={Springer}\n}","category":"page"},{"location":"references/","page":"References","title":"References","text":"</details></li></ul>","category":"page"},{"location":"references/","page":"References","title":"References","text":"","category":"page"},{"location":"references/#[ROH06]","page":"References","title":"[ROH06]","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"<ul><li>","category":"page"},{"location":"references/","page":"References","title":"References","text":"J. Rohn. Solvability of systems of interval linear equations and inequalities, Linear optimization problems with inexact data, pages 35–77. Springer, 2006","category":"page"},{"location":"references/","page":"References","title":"References","text":"<li style=\"list-style: none\"><details>\n<summary>bibtex</summary>","category":"page"},{"location":"references/","page":"References","title":"References","text":"@incollection{rohn2006solvability,\n  title={Solvability of systems of interval linear equations and inequalities},\n  author={Rohn, Jir{\\i}},\n  booktitle={Linear optimization problems with inexact data},\n  pages={35--77},\n  year={2006},\n  publisher={Springer}\n}","category":"page"},{"location":"references/","page":"References","title":"References","text":"</details></li></ul>","category":"page"},{"location":"references/","page":"References","title":"References","text":"","category":"page"},{"location":"references/#[ROH95]","page":"References","title":"[ROH95]","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"<ul><li>","category":"page"},{"location":"references/","page":"References","title":"References","text":"J. Rohn and V. Kreinovich. Computing exact componentwise bounds on solutions of lineary systems with interval data is NP-hard. SIAM Journal on Matrix Analysis and Applications, 16(2):415–420, 1995.","category":"page"},{"location":"references/","page":"References","title":"References","text":"<li style=\"list-style: none\"><details>\n<summary>bibtex</summary>","category":"page"},{"location":"references/","page":"References","title":"References","text":"@article{rohn1995computing,\n  title={Computing exact componentwise bounds on solutions of lineary systems with interval data is NP-hard},\n  author={Rohn, Jiri and Kreinovich, Vladik},\n  journal={SIAM Journal on Matrix Analysis and Applications},\n  volume={16},\n  number={2},\n  pages={415--420},\n  year={1995},\n  publisher={SIAM}\n}","category":"page"},{"location":"references/","page":"References","title":"References","text":"</details></li></ul>","category":"page"},{"location":"references/","page":"References","title":"References","text":"","category":"page"},{"location":"references/#[RUM10]","page":"References","title":"[RUM10]","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"<ul><li>","category":"page"},{"location":"references/","page":"References","title":"References","text":"S.M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica, 19:287–449, 2010","category":"page"},{"location":"references/","page":"References","title":"References","text":"<li style=\"list-style: none\"><details>\n<summary>bibtex</summary>","category":"page"},{"location":"references/","page":"References","title":"References","text":"@article{rump2010verification,\n  title={Verification methods: Rigorous results using floating-point arithmetic},\n  author={Rump, Siegfried M},\n  journal={Acta Numerica},\n  volume={19},\n  pages={287--449},\n  year={2010},\n  publisher={Cambridge University Press}\n}","category":"page"},{"location":"references/","page":"References","title":"References","text":"</details></li></ul>","category":"page"},{"location":"references/","page":"References","title":"References","text":"","category":"page"},{"location":"references/#[RUM01]","page":"References","title":"[RUM01]","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"<ul><li>","category":"page"},{"location":"references/","page":"References","title":"References","text":"Rump, Siegfried M. Computational error bounds for multiple or nearly multiple eigenvalues, Linear algebra and its applications 324.1-3 (2001): 209-226.","category":"page"},{"location":"references/","page":"References","title":"References","text":"<li style=\"list-style: none\"><details>\n<summary>bibtex</summary>","category":"page"},{"location":"references/","page":"References","title":"References","text":"@article{rump2001computational,\n  title={Computational error bounds for multiple or nearly multiple eigenvalues},\n  author={Rump, Siegfried M},\n  journal={Linear algebra and its applications},\n  volume={324},\n  number={1-3},\n  pages={209--226},\n  year={2001},\n  publisher={Elsevier}\n}","category":"page"},{"location":"references/","page":"References","title":"References","text":"</details></li></ul>","category":"page"},{"location":"references/","page":"References","title":"References","text":"","category":"page"},{"location":"references/#[RUM99]","page":"References","title":"[RUM99]","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"<ul><li>","category":"page"},{"location":"references/","page":"References","title":"References","text":"Rump, Siegfried M. Fast and parallel interval arithmetic, BIT Numerical Mathematics 39.3, 534-554, 1999","category":"page"},{"location":"references/","page":"References","title":"References","text":"<li style=\"list-style: none\"><details>\n<summary>bibtex</summary>","category":"page"},{"location":"references/","page":"References","title":"References","text":"@article{rump1999fast,\n  title={Fast and parallel interval arithmetic},\n  author={Rump, Siegfried M},\n  journal={BIT Numerical Mathematics},\n  volume={39},\n  number={3},\n  pages={534--554},\n  year={1999},\n  publisher={Springer}\n}","category":"page"},{"location":"references/","page":"References","title":"References","text":"</details></li></ul>","category":"page"},{"location":"references/","page":"References","title":"References","text":"","category":"page"},{"location":"references/#[SKA06]","page":"References","title":"[SKA06]","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"<ul><li>","category":"page"},{"location":"references/","page":"References","title":"References","text":"Skalna, Iwona A Method for Outer Interval Solution of Systems of Linear Equations Depending Linearly on Interval Parameters, Reliable Computing, 12.2, 107-120, 2006","category":"page"},{"location":"references/","page":"References","title":"References","text":"<li style=\"list-style: none\"><details>\n<summary>bibtex</summary>","category":"page"},{"location":"references/","page":"References","title":"References","text":"@article{skalna2006,\n  title={A Method for Outer Interval Solution of Systems of Linear Equations Depending Linearly on Interval Parameters},\n  author={Skalna, Iwona},\n  journal={Reliable Computing},\n  volume={12},\n  number={2},\n  pages={107--120},\n  year={2006},\n  publisher={Springer}\n}","category":"page"},{"location":"references/","page":"References","title":"References","text":"</details></li></ul>","category":"page"},{"location":"explanations/decomposition/#Preconditioning-interval-linear-systems","page":"Canonical Decomposition","title":"Preconditioning interval linear systems","text":"","category":"section"},{"location":"explanations/decomposition/","page":"Canonical Decomposition","title":"Canonical Decomposition","text":"Pages = [\"decomposition.md\"]","category":"page"},{"location":"explanations/decomposition/#Basic-concepts","page":"Canonical Decomposition","title":"Basic concepts","text":"","category":"section"},{"location":"explanations/decomposition/","page":"Canonical Decomposition","title":"Canonical Decomposition","text":"Consider the square interval linear system","category":"page"},{"location":"explanations/decomposition/","page":"Canonical Decomposition","title":"Canonical Decomposition","text":"mathbfAx=mathbfb","category":"page"},{"location":"explanations/decomposition/","page":"Canonical Decomposition","title":"Canonical Decomposition","text":"preconditioning the interval linear system by a real matrix C means to multiply both sides of the equation by C, obtaining the new system","category":"page"},{"location":"explanations/decomposition/","page":"Canonical Decomposition","title":"Canonical Decomposition","text":"CmathbfAx=Cmathbfb","category":"page"},{"location":"explanations/decomposition/","page":"Canonical Decomposition","title":"Canonical Decomposition","text":"which is called preconditioned system. Let us denote by A_c the midpoint matrix of mathbfA. Popular choices for C are","category":"page"},{"location":"explanations/decomposition/","page":"Canonical Decomposition","title":"Canonical Decomposition","text":"Inverse midpoint preconditioning: Capprox A_c^-1\nInverse diagonal midpoint preconditioning: Capprox D_A_c^-1 where D_A_c is the diagonal matrix containing the main diagonal of A_c.","category":"page"},{"location":"explanations/decomposition/#Advantages-of-preconditioning","page":"Canonical Decomposition","title":"Advantages of preconditioning","text":"","category":"section"},{"location":"explanations/decomposition/","page":"Canonical Decomposition","title":"Canonical Decomposition","text":"Using preconditioning to solve an interval linear system can have mainly two advantages.","category":"page"},{"location":"explanations/decomposition/#Extend-usability-of-algorithms","page":"Canonical Decomposition","title":"Extend usability of algorithms","text":"","category":"section"},{"location":"explanations/decomposition/","page":"Canonical Decomposition","title":"Canonical Decomposition","text":"Some algorithms require the matrix to have a specific structure in order to be used. For example Hansen-Bliek-Rohn algorithm requires mathbfA to be an H-matrix. However, the algorithm can be extended to work to strongly regular matrices using inverse midpoint preconditioning. (Recall that an interval matrix is strongly regular if A_c^-1mathbfA is an H-matrix).","category":"page"},{"location":"explanations/decomposition/#Improve-numerical-stability","page":"Canonical Decomposition","title":"Improve numerical stability","text":"","category":"section"},{"location":"explanations/decomposition/","page":"Canonical Decomposition","title":"Canonical Decomposition","text":"Even if the algorithms theoretically work","category":"page"},{"location":"tutorials/canonical/#Eigenvalue-computations","page":"Canonical Decompositions","title":"Eigenvalue computations","text":"","category":"section"},{"location":"tutorials/canonical/#Another-topic-TBD","page":"Canonical Decompositions","title":"Another topic TBD","text":"","category":"section"},{"location":"tutorials/canonical/","page":"Canonical Decompositions","title":"Canonical Decompositions","text":"For now duplicate and see if it works (FixMe)","category":"page"},{"location":"tutorials/canonical/","page":"Canonical Decompositions","title":"Canonical Decompositions","text":"Given a (real or complex) interval matrix AinmathbbIC^ntimes n, we define the eigenvalue set ","category":"page"},{"location":"tutorials/canonical/","page":"Canonical Decompositions","title":"Canonical Decompositions","text":"mathbfLambda=lambdainmathbbC lambdatext is an eigenvalue of Atext for some AinmathbfA","category":"page"},{"location":"tutorials/canonical/","page":"Canonical Decompositions","title":"Canonical Decompositions","text":"While characterizing the solution set mathbfLambda (or even its hull) is computationally challenging, the package offers the function TBD which contains an interval box containing mathbfLambda. ","category":"page"},{"location":"tutorials/canonical/","page":"Canonical Decompositions","title":"Canonical Decompositions","text":"note: Note\nAt the moment, eigenbox is not rigorous, that is the computations for the non-interval eigenvalue problem solved internally are carried out using normal non-verified floating point computations.","category":"page"},{"location":"tutorials/canonical/","page":"Canonical Decompositions","title":"Canonical Decompositions","text":"To demonstrate the functionality, let us consider the following interval matrix","category":"page"},{"location":"tutorials/canonical/","page":"Canonical Decompositions","title":"Canonical Decompositions","text":"using InformationInequalities\n\nA = [3 2 1\n     2 2 2\n     0 1 2]","category":"page"},{"location":"tutorials/canonical/","page":"Canonical Decompositions","title":"Canonical Decompositions","text":"To get a qualitative evaluation of the enclosure, we can simulate the solution set of mathbfA using Montecarlo, as it is done in the following example","category":"page"},{"location":"tutorials/canonical/","page":"Canonical Decompositions","title":"Canonical Decompositions","text":"using Random; # hide\nusing LinearAlgebra;\nRandom.seed!(42) # hide\nusing Plots\nN = 1000\n\nevalues = zeros(ComplexF64, 4, N)\n\nfor i in 1:N\n    evalues[:, i] = eigvals(rand(4,4))\nend\n\nrpart = real.(evalues)\nipart = imag.(evalues)\n\nplot(; ratio=1, label=\"enclosure\")\nscatter!(rpart[1, :], ipart[1, :]; label=\"λ₁\")\nscatter!(rpart[2, :], ipart[2, :]; label=\"λ₂\")\nscatter!(rpart[3, :], ipart[3, :]; label=\"λ₃\")\nscatter!(rpart[4, :], ipart[4, :]; label=\"λ₄\")\nxlabel!(\"real\")\nylabel!(\"imag\")\nsavefig(\"eigs.png\") # hide","category":"page"},{"location":"tutorials/canonical/","page":"Canonical Decompositions","title":"Canonical Decompositions","text":"(Image: )","category":"page"},{"location":"tutorials/canonical/","page":"Canonical Decompositions","title":"Canonical Decompositions","text":"Internally, the generical interval eigenvalue problem is","category":"page"},{"location":"CONTRIBUTING/#InformationInequalities.jl-contribution-guidelines","page":"Contributing","title":"InformationInequalities.jl contribution guidelines","text":"","category":"section"},{"location":"CONTRIBUTING/","page":"Contributing","title":"Contributing","text":"First of all, huge thanks for your interest in the package! ✨","category":"page"},{"location":"CONTRIBUTING/","page":"Contributing","title":"Contributing","text":"This page has some hopefully useful guidelines. If this is your first time contributing, please read the pull request-workflow section, mainly to make sure everything works smoothly and you don't get stuck with some nasty technicalities. ","category":"page"},{"location":"CONTRIBUTING/","page":"Contributing","title":"Contributing","text":"You are also encouraged to read the coding and documentation guidelines, but you don't need to deeply study and memorize those. Core developers are here to help you. Most importantly, relax and have fun!","category":"page"},{"location":"CONTRIBUTING/#Opening-issues","page":"Contributing","title":"Opening issues","text":"","category":"section"},{"location":"CONTRIBUTING/","page":"Contributing","title":"Contributing","text":"If you spot something strange in the software (something doesn't work or doesn't behave as expected) do not hesitate to open a bug issue.","category":"page"},{"location":"CONTRIBUTING/","page":"Contributing","title":"Contributing","text":"If have an idea of how to make the package better (a new feature, a new piece of documentation, an idea to improve some existing feature), you can open an enhancement issue. ","category":"page"},{"location":"CONTRIBUTING/","page":"Contributing","title":"Contributing","text":"In both cases, try to follow the template, but do not worry if you don't know how to fill something. ","category":"page"},{"location":"CONTRIBUTING/","page":"Contributing","title":"Contributing","text":"If you feel like your issue does not fit any of the above mentioned templates (e.g. you just want to ask something), you can also open a blank issue.","category":"page"},{"location":"CONTRIBUTING/#Pull-request-workflow","page":"Contributing","title":"Pull request workflow","text":"","category":"section"},{"location":"CONTRIBUTING/","page":"Contributing","title":"Contributing","text":"Pull requests are also warmly welcome. For small fixes/additions, feel free to directly open a PR. For bigger more ambitious PRs, it is preferable to open an issue first to discuss it. As a rule of thumb, every pull request should be as atomic as possible (fix one bug, add one feature, address one issue).","category":"page"},{"location":"CONTRIBUTING/#Setup","page":"Contributing","title":"Setup","text":"","category":"section"},{"location":"CONTRIBUTING/","page":"Contributing","title":"Contributing","text":"note: Note\nThis is just one way, you can do differently (e.g. clone your fork and add the original repo as upstream). In that case, make sure to use the correct remote names","category":"page"},{"location":"CONTRIBUTING/","page":"Contributing","title":"Contributing","text":"This is something that needs to be done only once, the first time you start contributing","category":"page"},{"location":"CONTRIBUTING/","page":"Contributing","title":"Contributing","text":"1. From the Julia REPL in package mode (you can enter package mode by typing ]) do","category":"page"},{"location":"CONTRIBUTING/","page":"Contributing","title":"Contributing","text":"pkg> dev InformationInequalities","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: )","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: version)(Image: License: MIT)(Image: Build Status)(Image: Coverage)(Image: bibtex citation)(Image: zenodo doi)","category":"page"},{"location":"#Overview","page":"Home","title":"Overview","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package contains routines to perform numerical linear algebra using interval arithmetic. This can be used both for rigorous computations and uncertainty propagation.","category":"page"},{"location":"","page":"Home","title":"Home","text":"An first overview of the package was given at BLA, the slides are available here.","category":"page"},{"location":"","page":"Home","title":"Home","text":"<iframe style=\"width:560px; height:315px\" src=\"https://www.youtube.com/embed/QHEV9Ie6spo\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>","category":"page"},{"location":"#Features","page":"Home","title":"Features","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"note: Note\nThe package is still under active development and things evolve quickly (or at least should)","category":"page"},{"location":"","page":"Home","title":"Home","text":"enclosure of the solution of interval linear systems\nexact characterization of the solution set of interval linear systems using \nverified solution of floating point linear systems\nenclosure of eigenvalues of interval matrices\nverified computation of eigenvalues and eigenvectors of floating point matrices","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Open a Julia session and enter","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Pkg; Pkg.add(\"InformationInequalities\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"this will download the package and all the necessary dependencies for you. Next you can import the package with","category":"page"},{"location":"","page":"Home","title":"Home","text":"using InformationInequalities","category":"page"},{"location":"","page":"Home","title":"Home","text":"and you are ready to go.","category":"page"},{"location":"#Quickstart","page":"Home","title":"Quickstart","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"using LinearAlgebra, LazySets, Plots\n\nA = [2..4 -1..1; -1..1 2..4]\nb = [-2..2, -1..1]\n\nXenclose = solve(A, b)\npolytopes = solve(A, b, LinearOettliPrager())\n\nplot(UnionSetArray(polytopes), ratio=1, label=\"solution set\", legend=:top)\nplot!(IntervalBox(Xenclose), label=\"enclosure\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: quickstart-example)","category":"page"},{"location":"#Citation","page":"Home","title":"Citation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"If you use this package in your work, please cite it as","category":"page"},{"location":"","page":"Home","title":"Home","text":"@software{nrethnakar2022,\nauthor = {\n            Nivedita Rethnakar and\n            Raymond W Yeung\n            Suhas Diggavi\n         },\ntitle  = {InformationInequalities.jl: Exploring Information Theoretic Inequalities},\nmonth  = {1},\nyear   = {2022},\ndoi    = {10.5282/zenodo.5363564},\nurl    = {https://github.com/juliaintervals/InformationInequalities.jl}\n}","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = InformationInequalities","category":"page"},{"location":"#InformationInequalities","page":"Home","title":"InformationInequalities","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for InformationInequalities.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [InformationInequalities]","category":"page"},{"location":"#InformationInequalities.add_two-Tuple{Any, Any}","page":"Home","title":"InformationInequalities.add_two","text":"Adding two functions\n\njulia> add_two(3,2)\n\n\nMore bla\n\n\n\n\n\n","category":"method"},{"location":"#InformationInequalities.find_subset","page":"Home","title":"InformationInequalities.find_subset","text":"find_subset(n::Int64,p,q,RV::AbstractString=\"X\")\n\nGiven i and j compute Κ ⊆ 𝒩 \\{i,j}; i.e., all non exclusive subsets. i,j can also be empty (i.e. []), in which case the non-empty superset gets listed. An optional prefix can be added (default is X).  \n\nExamples\n\njulia>find_subset(4,1,3,\"X\")\n[\"\" \"X1\" \"X1,X2\" \"X1,X2,X5\" \"X1,X5\" \"X2\" \"X2,X5\" \"X5\"]\n\njulia>find_subset(4,1,3,\"\")\n[\"\" \"1\" \"1,2\" \"1,2,5\" \"1,5\" \"2\" \"2,5\" \"5\"]\n\njulia> find_subset(5,4,3,\"🍒\")\n[\"\" \"🍒3\" \"🍒3,🍒4\" \"🍒4\"]\n\njulia> find_subset(5,[],[],\"🍓\")\n[\"🍓1\" \"🍓1,🍓2\" \"🍓1,🍓2,🍓3\" \"🍓1,🍓3\" \"🍓2\" \"🍓2,🍓3\" \"🍓3\"]\n\n\n\n\n\n","category":"function"},{"location":"#InformationInequalities.order_entropic","page":"Home","title":"InformationInequalities.order_entropic","text":"Each entropy word in an entropic vector is sorted.\n\nExamples\n\njulia> order_entropic(\"h24-h32-h132-h2\")\n\"h24 - h23 - h123 - h2\"\n\njulia> order_entropic(\"7h32 - h243 - h13701 - h92252\")\n\"7h23-h234-h01137-h22259\"\n\n\n\n\n\n\n","category":"function"},{"location":"#InformationInequalities.order_string","page":"Home","title":"InformationInequalities.order_string","text":"Each word in a sentence (string) is sorted alphabetically.\n\nExamples\n\njulia> order_string(\"This is a sorted sentence; Who is 1 and two  \")\n\" This is a deorst ;ceeennst Who is 1 adn otw  \"\n\n\n\n\n\n\n","category":"function"},{"location":"explanations/oxitip/#Preconditioning-interval-linear-systems","page":"oXitip: Machine Proof Checker","title":"Preconditioning interval linear systems","text":"","category":"section"},{"location":"explanations/oxitip/","page":"oXitip: Machine Proof Checker","title":"oXitip: Machine Proof Checker","text":"Pages = [\"oxitip.md\"]","category":"page"},{"location":"explanations/oxitip/#Basic-concepts-of-OXITIP","page":"oXitip: Machine Proof Checker","title":"Basic concepts of OXITIP","text":"","category":"section"},{"location":"explanations/oxitip/","page":"oXitip: Machine Proof Checker","title":"oXitip: Machine Proof Checker","text":"Consider the square interval linear system","category":"page"},{"location":"explanations/oxitip/","page":"oXitip: Machine Proof Checker","title":"oXitip: Machine Proof Checker","text":"mathbfAx=mathbfb","category":"page"},{"location":"explanations/oxitip/","page":"oXitip: Machine Proof Checker","title":"oXitip: Machine Proof Checker","text":"preconditioning the interval linear system by a real matrix C means to multiply both sides of the equation by C, obtaining the new system","category":"page"},{"location":"explanations/oxitip/","page":"oXitip: Machine Proof Checker","title":"oXitip: Machine Proof Checker","text":"CmathbfAx=Cmathbfb","category":"page"},{"location":"explanations/oxitip/","page":"oXitip: Machine Proof Checker","title":"oXitip: Machine Proof Checker","text":"which is called preconditioned system. Let us denote by A_c the midpoint matrix of mathbfA. Popular choices for C are","category":"page"},{"location":"explanations/oxitip/","page":"oXitip: Machine Proof Checker","title":"oXitip: Machine Proof Checker","text":"Inverse midpoint preconditioning: Capprox A_c^-1\nInverse diagonal midpoint preconditioning: Capprox D_A_c^-1 where D_A_c is the diagonal matrix containing the main diagonal of A_c.","category":"page"},{"location":"explanations/oxitip/#Advantages-of-preconditioning","page":"oXitip: Machine Proof Checker","title":"Advantages of preconditioning","text":"","category":"section"},{"location":"explanations/oxitip/","page":"oXitip: Machine Proof Checker","title":"oXitip: Machine Proof Checker","text":"Using preconditioning to solve an interval linear system can have mainly two advantages.","category":"page"},{"location":"explanations/oxitip/#Extend-usability-of-algorithms","page":"oXitip: Machine Proof Checker","title":"Extend usability of algorithms","text":"","category":"section"},{"location":"explanations/oxitip/","page":"oXitip: Machine Proof Checker","title":"oXitip: Machine Proof Checker","text":"Some algorithms require the matrix to have a specific structure in order to be used. For example Hansen-Bliek-Rohn algorithm requires mathbfA to be an H-matrix. However, the algorithm can be extended to work to strongly regular matrices using inverse midpoint preconditioning. (Recall that an interval matrix is strongly regular if A_c^-1mathbfA is an H-matrix).","category":"page"},{"location":"explanations/oxitip/#Improve-numerical-stability","page":"oXitip: Machine Proof Checker","title":"Improve numerical stability","text":"","category":"section"},{"location":"explanations/oxitip/","page":"oXitip: Machine Proof Checker","title":"oXitip: Machine Proof Checker","text":"Even if the algorithms theoretically work","category":"page"}]
}
