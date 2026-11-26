---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["diffusion model", "modello di diffusione", "denoising diffusion probabilistic model", "DDPM", "processo di diffusione in avanti", "forward diffusion process", "processo inverso", "reverse process", "modello generativo di diffusione"]
tags: [competenza, area/data-ml]
---

# Modello di diffusione probabilistico

> Modello generativo che distrugge i dati aggiungendo rumore gaussiano con una catena di Markov e impara, con una rete neurale, a invertire il processo partendo da rumore puro.

## Definizione / enunciato
**Processo in avanti** (catena di Markov gaussiana), $\beta_t=1-\alpha_t$:
$$q(x_t\mid x_{t-1})=\mathcal N\big(x_t;\sqrt{\alpha_t}\,x_{t-1},\beta_tI\big),\qquad q(x_{1:T}\mid x_0)=\prod_{t=1}^Tq(x_t\mid x_{t-1}).$$
In media $\langle x_T\rangle=\sqrt{\alpha_T}\cdots\sqrt{\alpha_1}\,x_0\to0$ per $T\to\infty$: i dati diventano rumore. **Processo inverso** appreso: $p_\theta(x_{t-1}\mid x_t)=\mathcal N\big(x_{t-1};\mu_\theta(x_t,t),\Sigma_\theta(x_t,t)\big)$, partendo da $x_T$ per arrivare a un nuovo $x_0$.

## Formule chiave
Con $\bar\alpha_t=\prod_{i=1}^t\alpha_i$ e la riparametrizzazione $x_t=\sqrt{\alpha_t}x_{t-1}+\sqrt{1-\alpha_t}\,\varepsilon_{t-1}$, per induzione
$$x_t=\sqrt{\bar\alpha_t}\,x_0+\sum_{i=1}^t\sqrt{\tfrac{\bar\alpha_t}{\bar\alpha_i}}\sqrt{1-\alpha_i}\,\varepsilon_{i-1},\qquad\sum_{i=1}^t\tfrac{\bar\alpha_t}{\bar\alpha_i}(1-\alpha_i)=1-\bar\alpha_t,$$
quindi $x_t=\sqrt{\bar\alpha_t}\,x_0+\sqrt{1-\bar\alpha_t}\,\bar\varepsilon_t$, $\bar\varepsilon_t\sim\mathcal N(0,I)$. Con Bayes $q(x_{t-1}\mid x_t,x_0)=q(x_{t-1}\mid x_0)q(x_t\mid x_{t-1})/q(x_t\mid x_0)=\mathcal N(x_{t-1};\tilde\mu(x_t,x_0),\tilde\beta_tI)$,
$$\tilde\beta_t=\frac{(1-\bar\alpha_{t-1})(1-\alpha_t)}{1-\bar\alpha_t},\qquad\tilde\mu=\frac1{\sqrt{\alpha_t}}\Big(x_t-\frac{1-\alpha_t}{\sqrt{1-\bar\alpha_t}}\bar\varepsilon_t\Big),$$
e la rete $\varepsilon_\theta$ si addestra con $\min\big\|\bar\varepsilon_t-\varepsilon_\theta\big(\sqrt{\bar\alpha_t}x_0+\sqrt{1-\bar\alpha_t}\,\bar\varepsilon_t,t\big)\big\|^2$, ponendo $\mu_\theta=\frac1{\sqrt{\alpha_t}}\big(x_t-\frac{1-\alpha_t}{\sqrt{1-\bar\alpha_t}}\varepsilon_\theta(x_t,t)\big)$.

## Intuizione
Punto di partenza fisico: un moto disordinato in un potenziale $V=\frac12\|x\|^2$ ha distribuzione $\propto e^{-\frac12\beta\|x\|^2}$, gaussiana. Il processo in avanti porta qualunque distribuzione di dati a questa gaussiana; se si sanno fare i passi all'indietro, da campioni gaussiani si ottengono campioni "come i dati" (immagini).

## Come si usa
Il passo all'indietro vero $q(x_{t-1}\mid x_t)$ non è noto, ma condizionato a $x_0$ è gaussiano con media e varianza esplicite: la rete impara a prevedere il rumore $\bar\varepsilon_t$ aggiunto, e da questo la media del passo inverso. La varianza $\tilde\beta_t$ non dipende dai dati.

## Nei corsi
- **Matematica per l'AI** (triennale): ultima parte degli appunti a mano di De Gregorio ("Modelli di diffusione"). Fonti: `triennale/ANNO 3/matematica AI/De Gregorio Mia 3.pdf` (p. 2-9).

## Prerequisiti
- [[Catena di Markov a tempo discreto]]: il processo in avanti è una catena di Markov
- [[Trucco della riparametrizzazione]]: scrive ogni passo come trasformazione di rumore standard
- [[Vettore gaussiano]]: somme di gaussiane indipendenti e condizionamento
- [[Formula di Bayes]]: per la distribuzione a posteriori $q(x_{t-1}\mid x_t,x_0)$

## Porta a
- Nessuno nel corso.

## Collegati
- [[Rete neurale artificiale]]: $\varepsilon_\theta$ è una rete addestrata con loss quadratica
- [[Limite gaussiano della passeggiata aleatoria]]: dal moto disordinato alla gaussiana
- [[Bilancio dettagliato]]: inversione temporale di una catena di Markov
