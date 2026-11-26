---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Matematica per l'AI]
livello: [magistrale, triennale]
aliases: ["positive recurrence", "null recurrence", "ricorrenza nulla", "tempo medio di ritorno"]
tags: [competenza, area/probabilita]
---

# Ricorrenza positiva

> Uno stato ricorrente è ricorrente positivo se il tempo medio di ritorno è finito; è la condizione che garantisce una distribuzione stazionaria.

## Definizione / enunciato
Uno stato $x$ è **ricorrente positivo** se $\mathbb E_x[T_x]<\infty$. Uno stato ricorrente che non è ricorrente positivo è **ricorrente nullo**. Sono proprietà di classe: se $x\Leftrightarrow y$ e $x$ è ricorrente positivo (risp. nullo), lo è anche $y$.

## Formule chiave
Idea della prova della proprietà di classe:
$$\mathbb E_x[T_x]=\mathbb P_x(T_y<T_x)\big(\mathbb E_x[T_y\mid T_y<T_x]+\mathbb E_y[T_x]\big)+\mathbb P_x(T_y>T_x)\,\mathbb E_x[T_x\mid T_y>T_x],$$
da cui $\mathbb E_y[T_y]\le\mathbb E_y[T_x]+\mathbb E_x[T_y]<\infty$.
Con la misura delle escursioni $\eta$: $\sum_y\eta(y)=\mathbb E_x[T_x]$.

## Intuizione
Ricorrente nullo vuol dire che si torna sempre, ma in media dopo un tempo infinito. La frazione di tempo spesa nello stato tende allora a 0, perché $1/\mathbb E_y[T_y]=0$.

## Come si usa
- Se la catena è irriducibile e ricorrente positiva, normalizzando la misura delle escursioni si ottiene una distribuzione stazionaria.
- Le catene finite irriducibili sono sempre ricorrenti positive.
- Passeggiata riflessa in 0 (lezione 10): ricorrente positiva per $p<1/2$, nulla per $p=1/2$, transiente per $p>1/2$.
- Per spazi infiniti, un criterio operativo è Foster-Lyapunov con drift $\le-\varepsilon$.

## Nei corsi
- **Processi stocastici** (magistrale): Lezioni 8-9 ("Positive recurrence", "Stationary distributions and positive recurrence"); `magistrale/Processi stocastici/riassunto_del_corso.tex` § Classificazione degli stati. Fonti principali: `magistrale/Processi stocastici/Lezione_08_14_10.pdf` (lezione 8), `magistrale/Processi stocastici/Lezione_09_20_10.pdf` (lezione 9); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Classificazione degli stati.
- **Matematica per l'AI** (triennale): $i$ è positivo ricorrente se $m_i=E_i(T_i)<\infty$, nullo ricorrente se $m_i=\infty$. Per catene irriducibili le sole alternative sono: transiente; nullo ricorrente con $m_i=\infty$ per ogni $i$; positivo ricorrente con $\pi$ invariante e $m_i=1/\pi_i<\infty$. Classi non chiuse transienti, classi chiuse finite positivo ricorrenti, classi chiuse infinite di qualunque tipo. Fonti: `triennale/ANNO 3/matematica AI/De Gregorio Mia 2 (1).pdf` (p. 9).

## Prerequisiti
- [[Ricorrenza e transienza]]: raffina la classe degli stati ricorrenti

## Porta a
- [[Esistenza e unicità della distribuzione stazionaria]]: esiste se e solo se ricorrente positiva
- [[Frequenza asintotica per DTMC]]: tempo medio di ritorno finito
- [[Ricorrenza e transienza di una CTMC]]: ricorrenza positiva non ereditata
- [[Criterio di Foster-Lyapunov per la ricorrenza positiva]]: tempo medio di ritorno finito

## Collegati
- Nessuno.
