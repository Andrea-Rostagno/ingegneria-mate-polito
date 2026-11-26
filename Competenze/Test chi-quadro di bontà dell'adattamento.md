---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["chi-square goodness-of-fit test", "test chi-quadro di Pearson", "Pearson's chi-squared test", "statistica di Pearson", "teorema di Pearson", "teorema di Fisher sui gradi di libertà", "frequenze attese", "expected frequencies", "chisq.test", "bontà dell'adattamento"]
tags: [competenza, area/statistica]
---

# Test chi-quadro di bontà dell'adattamento

> Confronta i conteggi osservati di una variabile categorica con quelli attesi sotto un modello: la statistica $X^2=\sum(\text{oss}-\text{att})^2/\text{att}$ è asintoticamente chi-quadro con $D-1$ gradi di libertà, meno uno per ogni parametro stimato.

## Definizione / enunciato
Per $H_0:\boldsymbol\pi=\boldsymbol\pi^0$ (libro, cap. 15, Def. 15.13): $X^2=\sum_{i=1}^D\frac{(N_i-n\pi^0_i)^2}{n\pi^0_i}$. **Teorema di Pearson** (Teorema 15.14): se $\mathbf N\sim\mathrm{Mult}(n;\boldsymbol\pi)$ con $\pi_i>0$,
1. $n(\frac{\mathbf N}n-\boldsymbol\pi)'\Sigma^{-1}(\frac{\mathbf N}n-\boldsymbol\pi)=\sum_{i=1}^D\frac{(N_i-n\pi_i)^2}{n\pi_i}$, con $\Sigma=\operatorname{diag}(\boldsymbol\pi)-\boldsymbol\pi\boldsymbol\pi'$ e $\Sigma^{-1}=\operatorname{diag}(1/\pi_1,\dots,1/\pi_d)+\frac1{\pi_D}\mathbf 1\mathbf 1'$;
2. $X^2\to\chi^2(D-1)$ in legge; si rifiuta se $X^2>\chi^2_\alpha(D-1)$.
**Teorema di Fisher** (Teorema 15.17): se le $\pi_i(\boldsymbol\theta)$ dipendono da $r<D-1$ parametri stimati, $X^2(\hat{\boldsymbol\theta})\to\chi^2(D-1-r)$.

## Formule chiave
Base asintotica: TLC multinomiale $\sqrt n(\mathbf N/n-\boldsymbol\pi)\to N_d(\mathbf 0,\Sigma)$ (Teorema 15.12) più funzionale continuo; la forma quadratica è una distanza di Mahalanobis. Regola pratica: frequenze attese $n\pi^0_i\ge5$.

## Intuizione
Si misura la distanza tra osservato e atteso pesando ogni cella con la sua variabilità attesa. Ogni parametro stimato avvicina gli attesi ai dati e "consuma" un grado di libertà.

## Come si usa
- Mendel (libro, Es. `c15-mendel`): 6022 gialli e 2001 verdi su 8023, attesi 6017.25 e 2005.75, $X^2=0.0150$, p-value $0.90$; Fisher (1936) notò che, sommati su molti esperimenti, i dati di Mendel si adattavano *troppo* bene.
- Roulette: 37 numeri equiprobabili, $X^2=\frac Dn\sum N_i^2-n$ con frequenze attese uguali.
- Variabili continue: si discretizza in classi (meglio equiprobabili sotto il modello) e si stimano i parametri; per la normale con $\mu,\sigma^2$ stimati i g.d.l. sono $D-3$. In R `chisq.test`.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 15, §15.4-15.7 (Teoremi 15.12, 15.14, 15.17, pp. 254-258); dimostrazione completa del docente. Fonti: `Libri/Modelli statistici/capitoli/cap15.tex`; `magistrale/Modelli statistici/251217 Capitolo Dati Categorici.pdf`; `magistrale/Modelli statistici/251210 Dati categorici.pdf`.

## Prerequisiti
- [[Distribuzione Multinoulli]]: momenti della one-hot
- [[Distribuzione multinomiale]]: legge dei conteggi
- [[Teorema del limite centrale]]: versione multinomiale
- [[Distribuzione chi-quadro]]: legge limite

## Porta a
- [[Test chi-quadro di indipendenza e omogeneità]]: due variabili categoriche

## Collegati
- [[Misure di distanza]]: $X^2$ come distanza di Mahalanobis
- [[Intervallo di confidenza per una proporzione]]: caso $D=2$, $X^2=z^2$
- [[Bontà di adattamento di una copula]]: altro test di adattamento
