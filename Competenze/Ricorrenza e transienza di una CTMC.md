---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [irreducibility CTMC, irriducibilità di una CTMC, return times, tempo di ritorno, positive and null recurrence CTMC, ricorrenza positiva CTMC]
tags: [competenza, area/probabilita]
---

# Ricorrenza e transienza di una CTMC

> Classificazione degli stati di una CTMC tramite il tempo di ritorno $T^c_j$, e suo rapporto con la classificazione della catena embedded.

## Definizione / enunciato
**Irriducibilità.** La CTMC è irriducibile se per ogni $i,j$ esiste $t>0$ con $p_t(i,j)>0$. Una CTMC non esplosiva è irriducibile se e solo se lo è la embedded.
**Tempo di ritorno.** $T^c_j=\inf\{t\ge0: X_t=j \text{ e } X_s\ne j \text{ per qualche } s<t\}$, cioè il primo istante in cui si *rientra* in $j$ da un altro stato (infinito per stati assorbenti).
**Ricorrenza.** $j$ è ricorrente se $\mathbb P_j(T^c_j<\infty)=1$ o se è assorbente; altrimenti transiente. È proprietà di classe; se esiste $\pi$ stazionaria con $\pi(j)>0$, $j$ è ricorrente.
**Ricorrenza positiva.** $j$ ricorrente è positivo se $\mathbb E_j[T^c_j]<\infty$ (o assorbente), nullo altrimenti. Anche questa è proprietà di classe.

**Teorema.** Se la CTMC è non esplosiva, $j$ è transiente (ricorrente) per la CTMC se e solo se lo è per la embedded.

## Formule chiave
$$T^c_j=\sum_{m=0}^{T^d_j-1}\tau^{(m)},\qquad \tau^{(m)}\sim\mathrm{Exp}(\lambda(Y_m)).$$

## Intuizione
Senza esplosione una somma di un numero finito di esponenziali è finita, quindi $T^c_j<\infty\iff T^d_j<\infty$. La **ricorrenza positiva invece non passa**: conta il valore atteso del tempo, che dipende dai tassi. Con $q(j,j\pm1)=2^j$ la embedded è una passeggiata riflessa con $p=1/2$ (ricorrente nulla), ma la CTMC è ricorrente positiva con $\pi(j)=(1/2)^{j+1}$, perché le permanenze si accorciano. Nell'es. G accade il contrario: CTMC ricorrente nulla, embedded ricorrente positiva.

## Come si usa
Spazio finito: $S=T\cup R_1\cup\dots\cup R_k$ (transienti + classi chiuse ricorrenti); una CTMC finita irriducibile è ricorrente. Es. F: dalla embedded, 1 e 4 transienti, 2, 3, 5 ricorrenti, e positivi perché ogni classe chiusa finita ha una stazionaria. Per la ricorrenza positiva su spazio infinito si cerca una distribuzione stazionaria (nascita-morte: $M<\infty$) dopo aver escluso l'esplosione.

## Nei corsi
- **Processi stocastici** (magistrale): argomento 10. Fonti: `magistrale/Processi stocastici/Lezione_12_28_10.pdf` (lezione 12, definizioni e teorema), `magistrale/Processi stocastici/Lezione_13_03_11.pdf` (lezione 13), `magistrale/Processi stocastici/Lezione_14_04_11.pdf` (lezione 14, esempio $2^j$), `topics_2025_26.pdf` (argomento 10), `suggested_exercises_CTMC.pdf` (es. F, G).
## Prerequisiti
- [[Catena embedded]]: ricorrenza ereditata dalla catena embedded
- [[Ricorrenza positiva]]: ricorrenza positiva non ereditata
- [[Classi di comunicazione]]: irriducibilità uguale a quella embedded

## Porta a
- [[Distribuzione stazionaria di una CTMC]]: esiste se ricorrente positiva
- [[Frequenza asintotica per CTMC]]: tempi di ritorno quasi certamente finiti

## Collegati
- [[Criterio di Foster-Lyapunov per la ricorrenza]]: versione del criterio per CTMC
