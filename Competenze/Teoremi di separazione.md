---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa, Ottimizzazione in condizione di incertezza]
livello: [triennale, magistrale]
aliases: ["separating hyperplane theorem", "teorema dell'iperpiano di separazione", "iperpiano di supporto di un convesso", "separazione stretta", "strict separation"]
tags: [competenza, area/ottimizzazione]
---

# Teoremi di separazione

> Due insiemi convessi disgiunti si possono separare con un iperpiano; con chiusura e compattezza la separazione è stretta. Sono lo strumento con cui si dimostra il lemma di Farkas.

## Definizione / enunciato
**Iperpiano di supporto.** Se $C\subset\mathbb R^n$ è convesso e $\mathbf x_0$ non appartiene al suo interno, esiste $\mathbf a\ne\mathbf 0$ tale che $\mathbf a^T\mathbf x\ge\mathbf a^T\mathbf x_0$ per ogni $\mathbf x\in C$.

**Iperpiano di separazione.** Se $C_1,C_2\subset\mathbb R^n$ sono convessi, disgiunti e non vuoti, esiste $\mathbf a\ne\mathbf 0$ con
$$\mathbf a^T\mathbf x_1\le\mathbf a^T\mathbf x_2\qquad\forall\mathbf x_1\in C_1,\ \mathbf x_2\in C_2 .$$

**Separazione stretta.** Se inoltre $C_1$ è chiuso e $C_2$ compatto, esistono $\mathbf a\ne\mathbf 0$ e $b$ con
$$\mathbf a^T\mathbf x_1<b<\mathbf a^T\mathbf x_2\qquad\forall\mathbf x_1\in C_1,\ \mathbf x_2\in C_2 .$$

## Formule chiave
Controesempio alla separazione stretta senza compattezza: $C_1=\{(x_1,x_2):x_1>0,x_2>0,x_1x_2\ge1\}$ e $C_2=\{(x_1,x_2):x_1\le0\}$ sono chiusi, convessi e disgiunti, ma nessuno è compatto e non esiste un iperpiano che li separi strettamente (l'iperbole si avvicina asintoticamente all'asse).

## Intuizione
Fra due "blob" convessi che non si toccano si può sempre far passare un piano; se hanno un punto di frontiera comune la separazione c'è ma non è stretta.

## Come si usa
Nel lemma di Farkas si separa strettamente il punto $\mathbf b$ (compatto) dal cono chiuso generato dalle colonne di $A$. In classificazione l'iperpiano separatore fra due classi è l'idea delle support vector machine.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap4.pdf` (p. 44-45, 47).
- **Ottimizzazione in condizione di incertezza** (magistrale): (a) punto non interno a un convesso, $\mathbf a^T\mathbf x\le\mathbf a^T\mathbf x_0$ per ogni $\mathbf x\in C$; (b) due convessi disgiunti separati da un iperpiano. Da (a) nasce la **funzione di supporto** $\sigma_C(\mathbf a)=\sup_{\mathbf x\in C}\mathbf a^T\mathbf x$ (sup perché può non essere raggiunta o valere $+\infty$), che per la palla unitaria è la norma duale. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/05a - Analisi convessa (versione completa).pdf` (p. 19-20).

## Prerequisiti
- [[Insieme convesso]]: ipotesi dei teoremi
- [[Equazione del piano]]: iperpiano $\mathbf a^T\mathbf x=b$ e vettore normale

## Porta a
- [[Lemma di Farkas]]: dimostrato con la separazione stretta

## Collegati
- [[Subgradiente]]: iperpiano di supporto del grafico di una funzione
- [[Support vector machine]]: iperpiano che separa due classi
