---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Matematica per l'AI]
livello: [magistrale, triennale]
aliases: ["existence and uniqueness of stationary distribution", "pi(i)=1/E_i[T_i]"]
tags: [competenza, area/probabilita]
---

# Esistenza e unicità della distribuzione stazionaria

> Per una DTMC irriducibile, la distribuzione stazionaria esiste se e solo se la catena è ricorrente positiva; allora è unica e vale $\pi(y)=1/\mathbb E_y[T_y]$.

## Definizione / enunciato
**Teorema (esistenza).** Se la catena è irriducibile e ricorrente positiva, esiste una distribuzione stazionaria.

**Teorema (unicità).** Se la catena è irriducibile ed esiste una stazionaria $\pi$, allora tutti gli stati sono ricorrenti positivi e
$$\pi(y)=\frac1{\mathbb E_y[T_y]}.$$

**Corollario.** Per una DTMC irriducibile, $\pi$ esiste se e solo se gli stati sono ricorrenti positivi. In tal caso $\pi$ è unica e $\pi(y)>0$ per ogni $y$. In particolare le catene finite irriducibili hanno una e una sola stazionaria.

## Formule chiave
Prova dell'unicità (usa la frequenza asintotica). Si ha $N_n(y)\le n$ e, per convergenza dominata,
$$\lim_n\mathbb E_\pi\Big[\frac{N_n(y)}n\Big]=\frac1{\mathbb E_y[T_y]},\qquad \mathbb E_\pi[N_n(y)]=\sum_{i=1}^n\sum_x p^{(i)}(x,y)\pi(x)=n\pi(y).$$

## Intuizione
Il tempo medio di attesa di un evento è l'inverso della sua probabilità, come per la geometrica: lo stato $y$ è occupato una frazione $1/\mathbb E_y[T_y]$ del tempo, e questa frazione deve coincidere con $\pi(y)$.

## Come si usa
- Prima di calcolare $\pi$ si verifica l'irriducibilità e la ricorrenza positiva, o la finitezza dello spazio.
- Se $\pi$ esiste, si ricavano i tempi medi di ritorno: $\mathbb E_y[T_y]=1/\pi(y)$.
- Nota del programma: l'unicità (argomento 3) si dimostra tramite la frequenza asintotica (argomento 4).

## Nei corsi
- **Processi stocastici** (magistrale): Lezioni 8-9 ("Stationary distributions and positive recurrence", "Positive recurrence and stationary distributions", "Comments", "Finite chains"); `magistrale/Processi stocastici/riassunto_del_corso.tex` § Distribuzioni stazionarie e limiti; argomento 3 di `magistrale/Processi stocastici/topics_2025_26.pdf`. Fonti principali: `magistrale/Processi stocastici/Lezione_08_14_10.pdf` (lezione 8), `magistrale/Processi stocastici/Lezione_09_20_10.pdf` (lezione 9); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Distribuzioni stazionarie e limiti.
- **Matematica per l'AI** (triennale): "se la catena è irriducibile e positivo ricorrente, allora $\pi$ invariante esiste ed è unica", con $\pi_i=1/m_i$; numero medio di visite in $i$ fra due visite successive a $k$: $\gamma_i^k=E_k(V_i^k)=\pi_i/\pi_k$. Fonti: `triennale/ANNO 3/matematica AI/De Gregorio Mia 2 (1).pdf` (p. 8-10).

## Prerequisiti
- [[Ricorrenza positiva]]: esiste se e solo se ricorrente positiva
- [[Misura stazionaria]]: costruzione tramite escursioni tra ritorni
- [[Classi di comunicazione]]: richiede una catena irriducibile
- [[Frequenza asintotica per DTMC]]: unicità dimostrata tramite frequenza asintotica

## Porta a
- [[Teorema ergodico per DTMC]]: media temporale uguale a media in pi
- [[Distribuzione limite di una DTMC]]: il limite coincide con pi

## Collegati
- Nessuno.
