---
layout: page
title: EVQueues.jl
description: Julia simulator for different deadline and non-deadline based EV charging policies
img: assets/img/ev.jpg
importance: 1
category: work
---

<div class="col-sm-8 mt-8 mt-md-0">
    {% include figure.liquid path="assets/img/ev.jpg" title="ev" class="img-fluid rounded z-depth-1" %}
</div>

This simulator in [Julia](https://julialang.org/) enables to simulate random arrival processes (Poisson) of vehciles to an EV charging station, with random demands and deadlines. It also has the ability to handle trace-based simulations from real world data such as those from [ACN-Sim](https://ev.caltech.edu/simulator) and test idealized scheduling policies.

Check out my [publications](/publications) page also where we use the simulator to get insight on the analysis of scheduling policies for EV charging facilities.

* [Source code](https://github.com/aferragu/EVQueues.jl)
