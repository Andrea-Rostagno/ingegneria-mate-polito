---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["linear programming", "LP", "problema LP", "forma standard", "forma canonica", "variabili di scarto", "slack variables", "matrice tecnologica"]
tags: [competenza, area/ottimizzazione]
---

# Programmazione lineare

> Classe di problemi con obiettivo e vincoli lineari (affini); se esiste un ottimo finito lo si può cercare tra i vertici del poliedro ammissibile.

## Definizione / enunciato
Forma generale:
$$\min\sum_{j=1}^nc_jx_j\ \ \text{s.t.}\ \sum_jd_{ij}x_j\le e_i\ (i\in I),\ \ \sum_jh_{ij}x_j=q_i\ (i\in E),\ \ l_j\le x_j\le u_j\ (j\in[n]),$$
con eventualmente $u_j=+\infty$, $l_j=0$ o $l_j=-\infty$.

**Trasformazioni:** un'uguaglianza diventa due disuguaglianze; una disuguaglianza diventa uguaglianza con una **variabile di scarto** $s_i\ge0$: $\sum_jd_{ij}x_j+s_i=e_i$; una variabile libera si scrive $x_j=x_j^+-x_j^-$ con $x_j^\pm\ge0$.

## Formule chiave
$$\text{forma standard: }\min\mathbf c^T\mathbf x\ \ \text{s.t. }A\mathbf x=\mathbf b,\ \mathbf x\ge\mathbf 0;\qquad \text{forma canonica: }\min\mathbf c^T\mathbf x\ \ \text{s.t. }A\mathbf x\ge\mathbf b,\ \mathbf x\ge\mathbf 0,$$
con $A\in\mathbb R^{m\times n}$, $m<n$ ("matrice tecnologica").

## Intuizione
Ogni vincolo è un semispazio, la loro intersezione un poliedro; l'obiettivo è lineare, quindi sia convesso sia concavo, e le sue curve di livello sono iperpiani paralleli: ci si sposta nella direzione di miglioramento fino all'ultimo vertice. Un LP è insieme un problema convesso e concavo, per questo l'ottimo sta sulla frontiera.

## Come si usa
Esiti possibili: ottimo finito (non necessariamente unico), problema **non ammissibile** (vincoli incompatibili), problema **illimitato** (poliedro illimitato e obiettivo che va a infinito). In forma standard i vincoli chiedono di scrivere $\mathbf b$ come combinazione conica di costo minimo delle colonne $A_j$: $\sum_jA_jx_j=\mathbf b$, $x_j\ge0$. È il primo livello della gerarchia dei problemi convessi (LP ⊂ QP ⊂ QCQP ⊂ SOCP ⊂ SDP), tutti casi di ottimizzazione conica.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap1.pdf` (p. 11-14, 27-30); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap4.pdf` (p. 5); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap7.pdf` (p. 3, 8).

## Prerequisiti
- [[Modello di ottimizzazione]]: caso lineare del modello generale
- [[Soluzioni di un sistema lineare]]: i vincoli in forma standard sono $A\mathbf x=\mathbf b$

## Porta a
- [[Soluzione basica ammissibile]]: i vertici del poliedro in forma algebrica
- [[Metodo del simplesso]]: algoritmo di soluzione
- [[Dualità nella programmazione lineare]]: il duale di un LP è un LP
- [[Programmazione quadratica]]: livello successivo della gerarchia convessa

## Collegati
- [[Poliedro]]: la regione ammissibile
- [[Problema di ottimizzazione convessa]]: LP è convesso e concavo insieme
- [[Mix ottimo di produzione]]: esempio guida
- [[Combinazioni coniche, affini e convesse]]: $\mathbf b$ come combinazione conica delle colonne
