---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Matematica per l'AI]
livello: [magistrale, triennale]
aliases: ["recurrence", "transience", "stato ricorrente", "stato transiente", "probabilità di ritorno"]
tags: [competenza, area/probabilita]
---

# Ricorrenza e transienza

> Uno stato è ricorrente se la catena vi ritorna con probabilità 1, e allora infinite volte; è transiente altrimenti, e allora viene abbandonato definitivamente.

## Definizione / enunciato
Sia $T_y=\min\{n\ge1:X_n=y\}$ il tempo di primo passaggio, o di ritorno se $X_0=y$, e sia $\rho_{xy}=\mathbb P_x(T_y<\infty)$.
- $y$ è **ricorrente** se $\rho_{yy}=1$;
- $y$ è **transiente** se $\rho_{yy}<1$.

Proprietà:
- uno stato ricorrente è visitato infinite volte q.c.;
- uno stato transiente è visitato un numero finito di volte, quindi da un certo istante non viene più visitato.

**Ricorrenza e raggiungibilità.** Se $x$ è ricorrente e $x\Rightarrow y$, allora $y$ è ricorrente e $\rho_{xy}=\rho_{yx}=1$. Ricorrenza e transienza sono quindi **proprietà di classe**.

## Formule chiave
$$\mathbb P_y(T_y^{(k)}<\infty)=\rho_{yy}^k,\qquad \mathbb P_y(y\text{ visitato infinite volte})=\begin{cases}1&\rho_{yy}=1\\0&\rho_{yy}<1.\end{cases}$$

## Intuizione
Ogni ritorno è un nuovo inizio (Markov forte). Il numero di ritorni è quindi una "geometrica": infinita se la probabilità di ritorno è 1, finita q.c. altrimenti.

## Come si usa
Per classificare (schema del `.tex`):
1. disegnare il grafo;
2. trovare le classi;
3. se lo spazio è finito, le classi chiuse sono ricorrenti e le altre transienti;
4. se lo spazio è infinito, usare il criterio delle visite, il confronto con passeggiate o nascita-morte, oppure Foster-Lyapunov.

Esempio: es. C di `suggested_exercises_DTMC.pdf`, dove con $p,q>0$ tutti gli stati sono ricorrenti o tutti transienti.

## Nei corsi
- **Processi stocastici** (magistrale): Lezioni 6-7 ("Classification of states, recurrence and transience", "Recurrence and reachability", "Communication and transience"); `magistrale/Processi stocastici/riassunto_del_corso.tex` § Classificazione degli stati; argomento 3 di `magistrale/Processi stocastici/topics_2025_26.pdf`. Fonti principali: `magistrale/Processi stocastici/Lezione_06_07_10.pdf` (lezione 6), `magistrale/Processi stocastici/Lezione_07_13_10.pdf` (lezione 7); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Classificazione degli stati.
- **Matematica per l'AI** (triennale): notazione degli appunti: $V_i=\sum_{n\ge0}1_{\{X_n=i\}}$ numero di visite, $f_i=P_i(T_i<\infty)$ probabilità di ritorno, $m_i=E_i(T_i)$ tempo medio di ritorno; $i$ ricorrente se $P_i(V_i=\infty)=1$, altrimenti transiente; $P_i(V_i\ge k+1)=(f_i)^k$; equivalenze $i$ ricorrente ⇔ $f_i=1$ ⇔ $\sum_np^{(n)}_{ii}=\infty$, transiente ⇔ $f_i<1$ ⇔ $\sum_np^{(n)}_{ii}<\infty$. In una classe comunicante gli stati sono tutti ricorrenti o tutti transienti; ogni classe ricorrente è chiusa, ogni classe chiusa finita è ricorrente; $P$ irriducibile e ricorrente ⇒ $P(T_j<\infty)=1$ per ogni $j$. Esempio con stati 1-4 transienti e 5, 6, 7 ricorrenti. Fonti: `triennale/ANNO 3/matematica AI/De Gregorio Mia 2 (1).pdf` (p. 6-7).

## Prerequisiti
- [[Proprietà di Markov forte]]: ritorni successivi sono indipendenti

## Porta a
- [[Criterio delle visite attese]]: caratterizza tramite numero atteso di visite
- [[Ricorrenza positiva]]: raffina la classe degli stati ricorrenti
- [[Misura stazionaria]]: esiste per catene ricorrenti
- [[Criterio di Foster-Lyapunov per la ricorrenza]]: prova ricorrenza senza calcoli espliciti

## Collegati
- [[Classi di comunicazione]]: ricorrenza è proprietà di classe
- [[Probabilità di impatto e tempo medio di impatto]]: la probabilità di ritorno è una probabilità di impatto (Matematica per l'AI)
