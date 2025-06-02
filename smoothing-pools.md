---
layout: markdown
title: Smoothing Pools
permalink: /smoothing-pools
---



## FAQ

#### Why join a smoothing pool?

A significant vector of centralization in staking is that large pools have the ability to share execution layer rewards among all its stakers. Until very recently, solo stakers didn’t have the option to benefit from smoothing execution layer rewards in a pool.

Analysis has shown that, **over a 5 year time span, validators in a smoothing pool earn 41.6% more than those not in a pool**. If a lone validator joins a smoothing pool with 99 validators in it, the likelihood of it outperforming in the pool compared to by itself is 78%. Ken Smith wrote [a full analysis](https://raw.githubusercontent.com/htimsk/SPanalysis/main/report/Analysis%20of%20the%20Smoothing%20Pool.pdf) using the Monte Carlo method with lots of math and helpful figures and charts. Or you can watch him [explain it on stage](https://www.youtube.com/watch?v=2NU6pij2OzU) at Devcon Bogotá.

#### When does it make sense for me to join a smoothing pool?

When there are more active validators in the pool than you’ll be adding. For example if you have 2 validators, it only makes sense to join a smoothing pool if it already has 3 active validators in it before you join. Validators move from pending to active after a block proposal.

#### Which smoothing pool should I join?

As of June 2025, EthStaker supports Smooth as the primary option.



## Comparison

{% assign smoothing_pool_data = site.data.smoothing-pools %}
{%- assign smooth = smoothing_pool_data.smooth -%}
{%- capture smooth_validators -%}
  <span id="smooth">{{smooth.validators_active}} active, {{smooth.validators_pending}} pending, {{smooth.validators_total}} total</span>
{%- endcapture -%}
{%- assign smoothly = smoothing_pool_data.smoothly -%}
{%- capture smoothly_validators -%}
  <span id="smoothly">{{smoothly.validators_active}} active, {{smoothly.validators_pending}} pending, {{smoothly.validators_total}} total</span>
{%- endcapture -%}

{:class="table" id="smoothingPoolsComparison"}
|                      | Smooth                       | 
|----------------------|------------------------------|
| Website              | <{{smooth.link}}>            |
| Address              | {{smooth.address}}           |
| Fee                  | {{smooth.fee}}               |
| Oracles              | {{smooth.oracles}}           |
| Validators in pool   | {{smooth_validators}}        |
| Extra incentives     | {{smooth.incentives}}        |
| Team                 | {{smooth.team}}              |
| MEV theft protection | {{smooth.bond}}              |
| Claim period         | {{smooth.claim_period}}      |
| Audit                | {{smooth.audit}}             |
| Launch date          | {{smooth.launch_date}}       |
| Discord              | [Invite]({{smooth.discord}}) |



### More Info

EthStaker hosted a community call with Smooth in Dec 2023:

<div class="videowrapper">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/dB5csfO8I0E?si=8sYpI5A2DHhN2QRb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


<script type="text/javascript">
{% include js/smoothingPools.js %}
</script>
