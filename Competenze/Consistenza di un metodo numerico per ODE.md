---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["consistency of ODE methods", "metodo consistente", "errore locale di troncamento", "local truncation error", "errore locale unitario di troncamento", "ordine di consistenza", "order of consistency", "errore globale"]
tags: [competenza, area/numerica]
---

# Consistenza di un metodo numerico per ODE

> Un metodo per $y'=f(x,y)$ è consistente se l'errore che introduce in un singolo passo, diviso per $h$, tende a zero; l'ordine di consistenza dice con che potenza di $h$.

## Definizione / enunciato
Dato $(x^*,y^*)\in S$, sia $u$ la soluzione del problema di riferimento $u'=f(x,u)$, $u(x^*)=y^*$. Il metodo a un passo dà $y_h=u(x^*)+h\varphi(x^*,u(x^*);h)$.
- **Errore locale di troncamento:** $\tau(x^*,y^*;h)=u(x^*+h)-y_h$.
- **Errore locale unitario:** $t(x^*,y^*;h)=\tau/h$, misura di quanto la soluzione esatta soddisfa l'equazione discreta.

Con $F_N(S)$ = funzioni con derivate parziali di ordine $\le N$ continue e limitate in $S$ (allora $y\in C^{N+1}$): il metodo è **consistente** se $t\to0$ per $h\to0$ per ogni $f\in F_1(S)$; ha **ordine di consistenza $p$** se $t=O(h^p)$ per ogni $f\in F_p(S)$, con $p$ massimo.

## Formule chiave
Errore globale: $y(x_{n+1})-y_{n+1}=[y(x_{n+1})-u(x_{n+1})]+[u(x_{n+1})-y_{n+1}]$, cioè propagazione dell'errore accumulato (legata al condizionamento) più errore locale del passo.
Eulero esplicito: $t=\frac12hu''(\eta)=O(h)$, perché $u''=f_x+f_uf$ è limitata per $f\in F_1$. Eulero implicito: $t=O(h)$. RK a 2 stadi: $t=(1-a_1-a_2)u'+h(\frac12-a_2b_2)u''+O(h^2)$.
Multistep: $t=\frac1h\Big[\sum_{i=0}^k\alpha_iu(x^*+(1-i)h)-h\sum_{i=0}^k\beta_iu'(x^*+(1-i)h)\Big]$.

## Intuizione
Consistenza vuol dire che, man mano che $h\to0$, lo schema discreto "diventa" l'equazione differenziale. Da sola non basta per la convergenza: serve anche che gli errori accumulati non esplodano (zero-stabilità).

## Come si usa
Lo strumento è sempre lo sviluppo di Taylor di $u(x^*+h)$ e di $\varphi$ attorno a $(x^*,y^*)$: si confrontano i coefficienti delle potenze di $h$. Così si ricavano le condizioni $a_1+a_2=1$, $a_2b_2=\frac12$ per i Runge-Kutta di ordine 2 e gli ordini dei metodi di Adams.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_07_ode_valori_iniziali_print.pdf` (p. 66-80, 99).

## Prerequisiti
- [[Formula di Taylor con resto di Lagrange]]: sviluppo di $u(x^*+h)$
- [[Metodo di Eulero esplicito]]: primo esempio di calcolo dell'ordine

## Porta a
- [[Convergenza di un metodo numerico per ODE]]: consistenza più zero-stabilità

## Collegati
- [[Zero-stabilità]]: l'altra condizione per la convergenza
- [[Metodi Runge-Kutta espliciti]]: coefficienti scelti per massimizzare l'ordine
- [[Ordine di convergenza di un metodo iterativo]]: nozione diversa (iterazioni contro passo h)
