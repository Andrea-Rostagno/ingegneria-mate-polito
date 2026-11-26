---
tipo: competenza
area: fisica
corsi: [Fisica 1]
livello: [triennale]
aliases: ["Clausius theorem", "disuguaglianza di Clausius", "Clausius inequality", "integrale di Clausius"]
tags: [competenza, area/fisica]
---

# Teorema di Clausius

> Generalizza il teorema di Carnot a una macchina che scambia calore con molte sorgenti: la somma dei calori divisi per le temperature delle sorgenti è minore o uguale a zero.

## Definizione / enunciato
Una macchina M scambia i calori $Q_i$ con $n$ sorgenti a temperature $T_i$. Si collegano $n$ macchine reversibili $R_i$ tra ciascuna $T_i$ e un'unica sorgente $T_0$, con $Q_{0i}/T_0=Q_i/T_i$. L'insieme di M e delle $R_i$ compie un ciclo monotermo con $T_0$, quindi il calore totale non può essere positivo:
$$\sum_{i=1}^nQ_{0i}\le0\ \Rightarrow\ \sum_{i=1}^n\frac{Q_i}{T_i}\le0,$$
con l'uguale se M è reversibile.

## Formule chiave
$$\oint\frac{\delta Q}{T}\le0\qquad(=0\ \text{per cicli reversibili})$$
dove $T$ è la temperatura della sorgente.

## Intuizione
Nelle macchine irreversibili si "produce" entropia: per tornare allo stato iniziale si deve cedere più calore (pesato con $1/T$) di quanto se ne assorbe.

## Come si usa
Applicato a due trasformazioni reversibili tra gli stessi stati mostra che $\int\delta Q/T$ non dipende dal cammino: nasce la funzione di stato entropia. Confrontando l'integrale di Clausius con $\Delta S$ si dimostra l'irreversibilità di un processo (`Termodinamica_Lezione5.pdf` pp. 25-31).

## Nei corsi
- **Fisica 1** (triennale): lezione del 23/05/2022; dimostrazione richiesta all'orale. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Termodinamica/Termodinamica_Lezione4.pdf` (pp. 48-53).

## Prerequisiti
- [[Teorema di Carnot]]: Q1/T1 + Q2/T2 ≤ 0 per due sorgenti
- [[Secondo principio della termodinamica]]: il ciclo monotermo non cede lavoro

## Porta a
- [[Entropia]]: ∮δQ/T = 0 sui cicli reversibili
- [[Principio di aumento dell'entropia]]: disuguaglianza per trasformazioni irreversibili

## Collegati
- Nessuno.
