---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra, Analisi funzionale]
livello: [triennale]
aliases: ["Zorn's lemma", "lemma di Kuratowski-Zorn", "esistenza di una base"]
tags: [competenza, area/algebra-geometria]
---

# Lemma di Zorn

> Un insieme ordinato in cui ogni catena ha un maggiorante possiede elementi massimali. È lo strumento per dimostrare esistenze "infinite", come quella di una base per ogni spazio vettoriale.

## Definizione / enunciato
**Lemma di Zorn.** Sia $X$ un insieme ordinato **induttivo**, cioè tale che ogni sottoinsieme totalmente ordinato ha un maggiorante in $X$. Allora $X$ ha elementi massimali.

È equivalente all'assioma della scelta.

**Prop. 15.** Sia $V\neq\{0\}$ uno spazio vettoriale su un campo $k$. Allora in $V$ esistono insiemi liberi di generatori, cioè basi.
- Una famiglia $\{v_i\}_{i\in I}$ è un **insieme di generatori** se ogni $v$ è combinazione lineare finita dei $v_i$.
- È **libera** se ogni sua sottofamiglia finita è linearmente indipendente.

## Formule chiave
$$X\ \text{induttivo}\ \Longrightarrow\ \exists\, m\in X\ \text{massimale}$$

## Intuizione
Si sale lungo le catene. Ogni catena ha un "tetto" in $X$, quindi non si può salire all'infinito senza fermarsi, e da qualche parte c'è un elemento oltre il quale non si va.

## Come si usa
Schema della dimostrazione di Prop. 15 (dispense pp. 17-18):
1. Sia $S=\{W\subseteq V\mid W\text{ libero}\}$, ordinato per inclusione. È non vuoto perché $V\neq0$.
2. $S$ è induttivo: per una catena $\{W_i\}$, l'unione $W=\bigcup W_i$ è libera, perché un numero finito di vettori sta già in un solo $W_{i_0}$.
3. Per Zorn esiste $W$ massimale. Se $W$ non generasse, esisterebbe $v\notin\langle W\rangle$ e $W\cup\{v\}$ sarebbe libero e più grande: assurdo.

Lo schema è sempre lo stesso: insieme di oggetti "buoni", catene, massimale, assurdo. Le dispense citano anche, senza dimostrazione, che con l'assioma della scelta ogni campo ha una chiusura algebrica (`Alg-14-12-22.pdf` p. 20).

## Nei corsi
- **Istituzioni algebra** (triennale): lezione 1-2. Estende al caso non finitamente generato il teorema di esistenza delle basi visto in Algebra lineare. Fonti: `triennale/ANNO 2/istituzioni/Alg-28-09-22.pdf` (lezione 1-2, pp. 15-18).
- **Analisi funzionale** (triennale): citato per l'esistenza di basi in dimensione infinita (Teor. 1.13, "argomenti dimostrativi più sofisticati") e usato esplicitamente nella dimostrazione del teorema di Hahn-Banach: sull'insieme delle estensioni di $\varphi$ di norma $\le\|\varphi\|$, ordinato per estensione, ogni catena ha un maggiorante, e l'elemento massimale è definito su tutto $X$. Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (p. 6; §8.5, pp. 127-129).

## Prerequisiti
- [[Insieme parzialmente ordinato]]: definizioni di catena, maggiorante, massimale, induttivo

## Porta a
- [[Base e dimensione]]: esistenza di una base per ogni spazio vettoriale non nullo
- [[Teorema di Hahn-Banach]]: estensione massimale di un funzionale (Analisi funzionale)

## Collegati
- [[Assioma della scelta]]: enunciato equivalente
