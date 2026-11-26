---
tipo: competenza
area: ottimizzazione
corsi: [Numerical opt]
livello: [magistrale]
aliases: ["augmented Lagrangian method", "method of multipliers", "metodo dei moltiplicatori", "lagrangiana aumentata", "augmented Lagrangian function", "funzione lagrangiana aumentata"]
tags: [competenza, area/ottimizzazione]
---

# Metodo della lagrangiana aumentata

> Metodo per $\min f(x)$ con $h(x)=0$ che minimizza in sequenza la lagrangiana aumentata $\mathcal L_A=f-\lambda^Th+\frac\mu2\|h\|^2$ e aggiorna i moltiplicatori con $\lambda_{k+1}=\lambda_k-\mu_kh(x_k)$. Così i vincoli si avvicinano a essere soddisfatti senza mandare $\mu\to\infty$.

## Definizione / enunciato
**Difetto della penalità quadratica.** Con $Q(x;\mu)=f(x)+\frac\mu2\|h(x)\|^2$ e $x_k=\arg\min Q(x;\mu_k)$ si ha in generale $h(x_k)\ne0$, e si dimostra che
$$h_i(x_k)\approx-\frac{\lambda_i^*}{\mu_k}.$$
Il vincolo è soddisfatto solo asintoticamente, per $\mu_k\to\infty$.

**Lagrangiana aumentata** (convenzione di P7: $\mathcal L(x,\lambda)=f(x)-\lambda^Th(x)$):
$$\mathcal L_A(x;\lambda,\mu)=f(x)-\lambda^Th(x)+\frac\mu2\|h(x)\|^2.$$

## Formule chiave
Il minimo approssimato $x_k$ di $\mathcal L_A(\cdot;\lambda_k,\mu_k)$ soddisfa
$$\nabla f(x_k)-\sum_i\big((\lambda_k)_i-\mu_kh_i(x_k)\big)\nabla h_i(x_k)\approx0 .$$
Il confronto con $\nabla f(x^*)-\sum_i\lambda_i^*\nabla h_i(x^*)=0$ suggerisce $(\lambda_k)_i-\mu_kh_i(x_k)\to\lambda_i^*$, cioè
$$h_i(x_k)\approx\frac{(\lambda_k)_i-\lambda_i^*}{\mu_k},\qquad (\lambda_{k+1})_i=(\lambda_k)_i-\mu_kh_i(x_k).$$
Più $\lambda_k$ è vicino a $\lambda^*$, più $h(x_k)$ è vicino a 0, anche con $\mu_k$ finito.

**Schema**, dati $\mu_0>0$, $\lambda_0$ e $x_0^{(0)}$; per $k\ge0$:
1. trova un minimo approssimato $x_k$ di $\mathcal L_A(x;\lambda_k,\mu_k)$ con un metodo non vincolato, partendo da $x_k^{(0)}$;
2. aggiorna $\lambda_{k+1}$ come sopra e poni $\mu_{k+1}=\rho\mu_k$;
3. scegli $x_{k+1}^{(0)}$, ad esempio $x_k$;

fino a che un criterio di arresto è soddisfatto.

## Intuizione
La penalità corregge la violazione dei vincoli, mentre $\lambda$ "impara" il moltiplicatore. Quando $\lambda_k\approx\lambda^*$, $h(x_k)$ è vicino a 0 già durante le iterazioni, non solo al limite $\mu_k\to\infty$ come nella penalità pura.

## Come si usa
- È la base dell'ADMM per problemi separabili.
- L'aggiornamento di $\mu_k$ segue la penalità ($\mu_{k+1}=\rho\mu_k$); quello di $\lambda_k$ è cruciale e va fatto con cura.
- Per i risultati teorici le note rimandano a NW, Teoremi 17.5-17.6.

## Nei corsi
- **Numerical opt** (magistrale): seconda parte della lezione sui metodi di penalità; da qui le note usano il segno "−" nella lagrangiana per coerenza con il libro. Fonti: `magistrale/Numerical opt/Pieraccini/Part_7_Constrained_Optimization_Penalty_methods.pdf` (p. 3-8).

## Prerequisiti
- [[Funzioni di penalità e barriera]]: la penalità quadratica $Q(x;\mu)$ di partenza
- [[Moltiplicatori di Lagrange]]: condizioni di ottimalità da cui nasce l'aggiornamento di $\lambda$

## Porta a
- [[ADMM]]: lagrangiana aumentata minimizzata a blocchi alterni per problemi separabili

## Collegati
- [[Dualità lagrangiana]]: $\lambda$ aggiornato come variabile duale (collegamento concettuale, non nelle note)
