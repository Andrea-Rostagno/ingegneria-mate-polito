---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: ["inspection paradox", "length-biased sampling", "intervallo che contiene t"]
tags: [competenza, area/probabilita]
---

# Paradosso dell'ispezione

> L'intervallo di rinnovo che contiene un istante fissato è in media più lungo di un intervallo tipico: gli intervalli lunghi hanno più probabilità di essere «ispezionati».

## Definizione / enunciato
Per un processo di rinnovo con inter-arrivi $t_i$, fissato $t$ grande, sia $\hat\tau$ la lunghezza dell'intervallo inter-arrivo che contiene $t$. Allora
$$\mathbb E[\hat\tau]>\mathbb E[t_i].$$
Nelle slide il caso di partenza è un processo di Poisson di tasso $\lambda$ con $t\neq0$ fissato. Il valore esplicito di $\mathbb E[\hat\tau]$ nel caso di Poisson è (da verificare sul PDF).

## Formule chiave
Esempio della slide: $t_i=1/9$ con probabilità $9/10$, $t_i=10$ con probabilità $1/10$. Quindi $\mathbb E[t_i]=\frac{11}{10}$. Gli intervalli corti coprono solo $1/11$ del tempo (per il teorema renewal reward), quindi
$$\mathbb E[\hat\tau]\approx\tfrac19\cdot\tfrac1{11}+10\cdot\tfrac{10}{11}>\mathbb E[t_i].$$
In generale la stessa logica dà $\mathbb E[\hat\tau]\approx\mathbb E[t_1^2]/\mathbb E[t_1]$ (formula ricavata dall'esempio, da verificare sul PDF).

## Intuizione
Un istante scelto "a caso" cade più facilmente in un intervallo lungo. Si campiona quindi in proporzione alla lunghezza, non in modo uniforme sugli intervalli.

## Come si usa
- Esempio delle classi (lezione 5): due classi di 30 e 10 studenti hanno media 20. Intervistando uno studente a caso, la media percepita è $\mathbb E[A]=30\cdot\frac{30}{40}+10\cdot\frac{10}{40}=25>20$.
- Negli esercizi si calcola la frazione di tempo in ciascun tipo di intervallo con il teorema renewal reward, poi si fa la media delle lunghezze pesata con quelle frazioni.

## Nei corsi
- **Processi stocastici** (magistrale): Lezione 5 ("The inspection paradox", "The lenght of a pinned interarrival interval", "The paradox is everywhere!"). Fonti principali: `magistrale/Processi stocastici/Lezione_05_06_10.pdf` (lezione 5), `magistrale/Processi stocastici/Lezione_02_25_09 (1).pdf` (lezione 2).

## Prerequisiti
- [[Processo di rinnovo]]: intervallo di rinnovo contenente un istante
- [[Teorema renewal reward]]: frazione di tempo in intervalli lunghi

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Processo di Poisson]]: esempio delle slide con inter-arrivi esponenziali
