---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["mean field logit dynamics", "logit ODE", "dinamica logit nei giochi anonimi", "logit dynamics for anonymous games", "giochi anonimi simmetrici", "symmetric anonymous games", "modello di flusso dinamico di campo medio", "mean field dynamic flow model", "polarizzazione"]
tags: [competenza, area/network]
---

# Dinamica logit di campo medio

> Limite per grandi popolazioni della noisy best response in un gioco anonimo: le frazioni di giocatori seguono $\dot z=g(z)-z$, con $g$ la distribuzione logit delle utilità. Nel gioco di maggioranza compare una biforcazione a $\beta=1$; nel traffico l'equilibrio tende al Wardrop per $\beta\to\infty$.

## Definizione / enunciato
**Gioco anonimo simmetrico** $(\{1,\dots,n\},\mathcal A,U)$: l'utilità di $i$ è $U(x_i,\theta(x_{-i}))$, dipende dalla propria azione e dal tipo degli altri. **Dinamica logit:**
$$\Lambda_{xy}=\frac{e^{\beta U(y_i,\theta(x_{-i}))}}{\sum_{a}e^{\beta U(a,\theta(x_{-i}))}},\qquad x_{-i}=y_{-i},\ x_i\neq y_i;$$
poiché $\theta(x_{-i})=\frac n{n-1}\theta(x)-\frac1{n-1}\delta^{(x_i)}$, dipende solo da $x_i,y_i,\theta(x)$: il sistema è anonimo.

## Formule chiave
Limite dei nuclei $\Psi_{ab}(\theta)=g(\theta)_b$ con
$$g(\theta)_b=\frac{e^{\beta U(b,\theta)}}{\sum_ce^{\beta U(c,\theta)}},\qquad F(\theta)=g(\theta)-\theta,\qquad \dot z=g(z)-z .$$
**Maggioranza sul completo** ($\mathcal A=\{\pm1\}$, $U(+1,\theta)=2\theta_1-1$): $\dot z_1=\frac{e^{\beta(2z_1-1)}}{e^{\beta(2z_1-1)}+e^{\beta(1-2z_1)}}-z_1$; $g(1/2)=1/2$, $g'(1/2)=\beta$, $g$ crescente con flesso in $1/2$, simmetria rispetto a $(1/2,1/2)$.
- $\beta<1$: unico equilibrio $1/2$, asintoticamente stabile;
- $\beta>1$: tre equilibri $z^*_1,\ 1/2,\ 1-z^*_1$, con $1/2$ instabile e gli altri stabili; per $\beta\to\infty$, $z^*\to0$: il sistema si polarizza.
**Flusso dinamico** (rete di Braess, ritardi $\tau_1=f_1,\tau_2=1,\tau_3=0,\tau_4=1,\tau_5=f_5$, tempi $T_1=1+z_1+z_3$, $T_2=1+z_2+z_3$, $T_3=1+z_3$): $\dot z_i=\frac{e^{-\beta T_i(z)}}{\sum_je^{-\beta T_j(z)}}-z_i$; unico equilibrio $z^*(\beta)=(\zeta,\zeta,1-2\zeta)$ con $\beta\zeta=\log\frac{1-2\zeta}\zeta$, globalmente asintoticamente stabile, $z^*(\beta)\to(0,0,1)$ = Wardrop.

## Intuizione
Ognuno rivede la propria scelta scegliendo "quasi" la migliore (scelta logit); il rumore $1/\beta$ compete con l'incentivo a conformarsi. Sopra la soglia l'imitazione vince e la popolazione si spacca su una delle due opinioni.

## Come si usa
Si scrive $U$, si calcola $g$, si studiano equilibri e stabilità di $\dot z=g(z)-z$ in funzione di $\beta$, e si legge il limite $\beta\to\infty$ come selezione di equilibri del gioco.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 11, "A mean field dynamic flow model", "Logit for symmetric anonymous games", "Hydrodynamic limit of the logit dynamics", "Logit ODE for majority game". Fonti: `magistrale/Dinamiche su network/slide/Slides-11-Meanfield.pdf` (pp. 14-18, 56-62).

## Prerequisiti
- [[Teorema di Kurtz]]: limite idrodinamico
- [[Noisy best response]]: la dinamica logit a $n$ finito

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Gioco di maggioranza]]: esempio con biforcazione e polarizzazione
- [[Equilibrio di Wardrop]]: limite $\beta\to\infty$ del flusso logit
- [[Biforcazione]]: biforcazione a forcone in $\beta=1$
- [[Softmax e cross-entropy]]: $g$ è una softmax delle utilità
