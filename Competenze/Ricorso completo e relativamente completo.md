---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["complete recourse", "relatively complete recourse", "ricorso completo", "ricorso relativamente completo", "simple recourse", "ricorso semplice", "feasibility of the second stage"]
tags: [competenza, area/ottimizzazione]
---

# Ricorso completo e relativamente completo

> Condizioni che garantiscono che il problema di secondo stadio abbia sempre una soluzione: per le decisioni di primo stadio ammissibili (relativamente completo) o per qualsiasi decisione (completo).

## Definizione / enunciato
Nel problema a due stadi con $W(\omega)=W$, siano
$$K_1=\{\mathbf x: A\mathbf x=\mathbf b,\ \mathbf x\ge\mathbf 0\},\qquad K_2(\xi)=\{\mathbf x:\exists\,\mathbf y\ge\mathbf 0,\ W\mathbf y=\mathbf h(\omega)-T(\omega)\mathbf x\},\qquad K_2=\bigcap_\xi K_2(\xi).$$
- **Ricorso relativamente completo**: per ogni $\mathbf x$ ammissibile al primo stadio e ogni realizzazione, il secondo stadio è ammissibile: $K_1\subseteq K_2$.
- **Ricorso completo**: vale per ogni $\mathbf x$ e ogni $\xi$, cioè $\{\mathbf y\ge\mathbf 0: W\mathbf y=\mathbf t\}\ne\emptyset$ per ogni $\mathbf t$: $W$ contiene una base positiva.
- **Ricorso semplice**: $W=[I,-I]$ (es. pianificazione con acquisti e stoccaggi), caso particolare di ricorso completo.

## Formule chiave
$$\text{completo}\ \Rightarrow\ \text{relativamente completo}\ \Leftrightarrow\ K_1\subseteq K_2 .$$
Con il ricorso semplice $W\mathbf y=\mathbf y^+-\mathbf y^-=\mathbf t$ ha sempre soluzione ($\mathbf y^+=\mathbf t^+$, $\mathbf y^-=\mathbf t^-$).

## Intuizione
Se il secondo stadio può diventare inammissibile, il valore atteso del ricorso vale $+\infty$ per certe $\mathbf x$ e servono vincoli aggiuntivi sul primo stadio. Variabili di penalità (domanda persa, acquisti spot) rendono il ricorso completo "per costruzione".

## Come si usa
Nel metodo L-shaped, con ricorso relativamente completo i sottoproblemi sono sempre ammissibili e i duali limitati, quindi bastano i tagli di ottimalità; altrimenti servono anche i tagli di ammissibilità. Nella Nested Benders e in SDDP si assume ricorso relativamente completo a ogni stadio.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): definizioni della Parte II. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_1.pdf` (p. 25-26, 52); `magistrale/Ottimizzazione in condizione di incertezza/lezione_2.pdf` (p. 3, 6).

## Prerequisiti
- [[Programmazione stocastica a due stadi]]: struttura con matrice di ricorso
- [[Combinazioni coniche, affini e convesse]]: base positiva e ricopertura conica

## Porta a
- [[Metodo L-shaped]]: niente tagli di ammissibilità con ricorso relativamente completo

## Collegati
- [[Decomposizione di Benders]]: i tagli di ammissibilità nascono dai raggi estremi del duale
