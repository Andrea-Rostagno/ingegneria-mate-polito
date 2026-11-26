---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["wisdom of crowds", "società sagge", "wise societies", "asymptotic wisdom", "saggezza asintotica", "teorema di Golub-Jackson"]
tags: [competenza, area/network]
---

# Saggezza della folla

> Se le opinioni iniziali sono misure rumorose indipendenti di una stessa grandezza, il consenso di French-DeGroot ha varianza minore di quella di un singolo; diventa esatto al crescere della rete se e solo se nessun agente conserva un peso non trascurabile.

## Definizione / enunciato
Rete $\mathcal G$ fortemente connessa e aperiodica; opinioni iniziali
$$x_i(0)=\mu+N_i,\qquad N_i\ \text{indipendenti},\ \mathbb E[N_i]=0,\ \operatorname{Var}(N_i)=\sigma^2 .$$
Con la dinamica $x(t+1)=Px(t)$:
$$x_i(t)\to\pi'x(0)=\sum_k\pi_k(\mu+N_k)=\mu+\sum_k\pi_kN_k .$$

## Formule chiave
$$\operatorname{Var}\Big(\sum_k\pi_kN_k\Big)=\sigma^2\sum_k\pi_k^2<\sigma^2,$$
perché con $\mathcal G$ fortemente connesso $\pi_i>0$ per ogni $i$, quindi $\sum_k\pi_k^2<\sum_k\pi_k=1$ ("la folla è più saggia del singolo").
**Saggezza asintotica (Golub e Jackson, 2010):**
$$\lim_{n\to+\infty}\pi'x(0)=\mu\iff\lim_{n\to+\infty}\max_k\pi_k=0 .$$

## Intuizione
Il consenso è uno stimatore di $\mu$ non distorto: la media pesata riduce il rumore. Il rumore sparisce solo se nessuno ha troppo potere sociale; un "guru" con $\pi_k$ grande trasferisce il proprio errore a tutti.

## Come si usa
Per confrontare reti: il guadagno rispetto al singolo è $\sum_k\pi_k^2$. Su un grafo non orientato $\pi_k=w_k/\sum_jw_j$, quindi la saggezza asintotica richiede che il grado massimo sia trascurabile rispetto al numero totale di archi.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 5, "Wisdom of crowds and wise societies". Fonti: `magistrale/Dinamiche su network/slide/Slides-5-Averaging-dynamics(con commenti).pdf` (p. 37).

## Prerequisiti
- [[Modello di French-DeGroot]]: il consenso è $\pi'x(0)$
- [[Varianza]]: varianza di una combinazione di variabili indipendenti

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Centralità di distribuzione invariante]]: $\max_k\pi_k$ misura la concentrazione del potere
- [[Legge dei grandi numeri]]: la saggezza asintotica ne è una versione pesata
