---
tipo: competenza
area: analisi
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["invariant sets", "insieme invariante per un flusso", "attrattore", "attractor", "insieme attraente", "attracting set", "orbita periodica", "periodic orbit", "orbita prima", "elementi critici", "punto vagante", "wandering point", "insieme non vagante", "nonwandering set", "bacino di attrazione", "basin of attraction", "transitività topologica", "insieme localmente massimale", "decomposizione in componenti ergodiche"]
tags: [competenza, area/analisi]
---

# Insiemi invarianti e attrattori

> Gli insiemi che la dinamica porta in sé stessi (punti fissi, orbite periodiche, attrattori) sono i luoghi dove ha senso la statistica degli stati stazionari; i punti vaganti invece non ritornano mai.

## Definizione / enunciato
Le proprietà statistiche hanno senso solo negli stati stazionari, dove le probabilità nello spazio delle fasi corrispondono a frequenze temporali; contano quindi gli **insiemi invarianti**.
- **Punti fissi:** $\phi^tx_s=x_s$ $\forall t$, cioè $F(x_s)=0$.
- **Orbite periodiche:** $\phi^{t+\tau}x_p=\phi^tx_p$ $\forall t$; il minimo periodo individua l'**orbita prima**. Punti fissi e orbite periodiche sono gli **elementi critici** del flusso.
- $x$ è **vagante** se ha un intorno $U$ con $[\phi^tU]\cap U=\emptyset$ per ogni $|t|>t_0$; i punti vaganti formano un aperto invariante, il complementare è l'**insieme non vagante** $\Omega$.
- **Attraente:** chiuso $A$ con un intorno $U$ tale che (a) per ogni intorno $V$ di $A$, $\phi^tU\subset V$ per $t$ grande, e (b) $\phi^tA\subseteq A$ per $t$ grande (condizioni equivalenti: $\phi^tA=A$; $\bigcap_t\phi^tU=A$).

## Formule chiave
- $I$ invariante è **localmente massimale** se esiste un intorno $U\supset I$ tale che ogni invariante $I'$ con $I\subseteq I'\subseteq U$ coincide con $I$; allora $I=\bigcap_{-\infty<t<\infty}\phi^tU$.
- Orbita **densa** in $I$; $\{\phi^t\}$ **topologicamente transitivo** in $I$ se esiste un'orbita densa; $I$ **indecomponibile** se due punti qualsiasi sono collegati da catene di $\epsilon$-pseudo-orbite.
- Transitività implica ergodicità; altrimenti $\Omega=\bigcup_iI_i$ (**decomposizione in componenti ergodiche**), ciascuna attrattore, anti-attrattore o repulsore. I **bacini** di attrattori diversi sono separati da insiemi repulsivi (*basin boundaries*).

## Intuizione
I sistemi dissipativi portano quasi tutti i punti su insiemi piccoli (attrattori) da cui non tornano più: lì l'insieme non vagante è molto più piccolo di $M$. Nei sistemi conservativi invece la ricorrenza è tipica.

## Come si usa
Classificazione del comportamento a lungo termine: trovare punti fissi ($F=0$) e orbite periodiche, studiarne la stabilità, individuare attrattori e bacini. Nel sistema di Lorenz il dominio $D$ in cui il campo punta verso l'interno contiene l'attrattore $A=\bigcap_{t\ge0}\phi^tD$.

## Nei corsi
- **Matematica per l'AI** (triennale): sezione "Critical orbits". Fonti: `triennale/ANNO 3/matematica AI/IntroToDynamicalSystems (1).pdf` (p. 3-5).

## Prerequisiti
- [[Flusso di un sistema dinamico]]: l'invarianza è rispetto a $\phi^t$
- [[Punto di equilibrio di una successione ricorsiva]]: i punti fissi nel caso discreto

## Porta a
- [[Teorema di ricorrenza di Poincaré]]: nei flussi conservativi quasi ogni punto è ricorrente
- [[Insieme iperbolico]]: attrattori con struttura iperbolica
- [[Misura invariante di un sistema dinamico]]: misure supportate sugli insiemi invarianti

## Collegati
- [[Sistema di Lorenz]]: esempio di attrattore caotico
- [[Classi di comunicazione]]: analogo delle classi chiuse di una catena di Markov
