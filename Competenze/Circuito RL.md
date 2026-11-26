---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["RL circuit", "transitorio RL", "extracorrente di chiusura", "costante di tempo L/R"]
tags: [competenza, area/fisica]
---

# Circuito RL

> Circuito con generatore, resistenza e induttanza: alla chiusura e all'apertura la corrente non salta ma varia esponenzialmente, perché l'induttanza genera una f.e.m. che si oppone alla variazione.

## Definizione / enunciato
Resistenza $R$ e f.e.m. autoindotta $V_L$ sono distribuite lungo il circuito, ma si possono immaginare concentrate in due componenti (resistore e induttore). Con l'interruttore chiuso sul generatore $V_0$, la legge di Ohm diventa $V_0+V_L=Ri$ con $V_L=-L\,di/dt$: un'equazione differenziale lineare del primo ordine in $i(t)$, con condizione $i=0$ a $t=0$.

## Formule chiave
$$V_0-L\frac{di}{dt}=Ri\quad\Rightarrow\quad \frac{di}{dt}=-\frac{R}{L}\left(i-\frac{V_0}{R}\right),\qquad \ln\left(i-\frac{V_0}{R}\right)=-\frac{R}{L}t+C$$
$$\text{accensione: } i(t)=\frac{V_0}{R}\left[1-e^{-\frac{R}{L}t}\right],\qquad \text{spegnimento: } i(t)=\frac{V_0}{R}e^{-\frac{R}{L}t}$$
Bilancio energetico (per la carica $dq$): $V_0\,dq=Ri\,dq+L\frac{di}{dt}dq$.
La costante di tempo $L/R$ non è scritta come formula a sé nelle slide: si legge nell'esponente.

## Intuizione
All'inizio l'induttore "frena" la corrente, che sale verso il valore di regime $V_0/R$ in un tempo dell'ordine di $L/R$. Allo spegnimento l'induttore sostiene la corrente (extracorrente), che decade con la stessa legge esponenziale.

## Come si usa
Si scrive la maglia, si separano le variabili e si integra con la condizione iniziale. Nel transitorio il generatore spende la potenza $P=V_Li=\left(L\frac{di}{dt}\right)i$ sull'induttore: integrandola si ottiene l'energia $\frac12Li^2$ immagazzinata nel campo magnetico. Grafico $i(t)$ con fase di accensione ($t_0$-$t_1$), regime e spegnimento ($t_2$-$t_3$) a p. 22.

## Nei corsi
- **Fisica 2** (triennale): circuiti resistivi, transitorio RL con interruttore a/b, bilancio energetico. Fonti: `triennale/ANNO 2/fisica 2/lezioni/23&24. LEZIONE.pdf` (pp. 18-24).

## Prerequisiti
- [[Autoinduzione]]: fem -L di/dt nella legge di Ohm
- [[Legge di Ohm]]: V0 + V_L = R i
- [[Equazioni differenziali lineari del primo ordine]]: i(t) risolve un'equazione lineare del primo ordine

## Porta a
- [[Energia del campo magnetico]]: lavoro del generatore sull'induttore durante il transitorio

## Collegati
- Nessuno.
