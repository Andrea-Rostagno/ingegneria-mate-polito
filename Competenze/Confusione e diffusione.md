---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["confusion and diffusion", "confusione", "confusion", "diffusion (Shannon)", "principi di Shannon per i cifrari"]
tags: [competenza, area/informatica]
---

# Confusione e diffusione

> Le due proprietà che, secondo Shannon (1949), un cifrario deve avere per resistere agli attacchi statistici: la diffusione disperde la statistica del messaggio, la confusione complica il legame tra chiave e crittogramma.

## Definizione / enunciato
- **Diffusione:** "spalma" il comportamento statistico del messaggio su tutto il crittogramma, così l'analisi statistica diventa più difficile. Spesso neutralizza l'analisi delle frequenze che rompe i cifrari monoalfabetici.
- **Confusione:** dal materiale intercettato il nemico calcola delle statistiche $s_1,\dots,s_n$. Per trovare la chiave $k=[k_1\cdots k_p]$ deve risolvere un sistema
$$f_1(k_1\cdots k_p)=s_1,\quad \dots,\quad f_n(k_1\cdots k_p)=s_n.$$
Confondere significa rendere questo sistema molto difficile da risolvere, ad esempio evitando che sia lineare.

## Formule chiave
Esempio di diffusione di Shannon riportato nelle dispense: se $P=[m_1m_2\cdots m_n]\in\mathbb Z_{26}^n$, si pone $C=[y_1y_2\cdots y_n]$ con
$$y_j\equiv\sum_{i=1}^{s} m_i\pmod{26}$$
(estremi della somma come stampati; il testo estratto è ambiguo, da verificare sul PDF). Secondo Shannon, le frequenze di lettere e digrammi del crittogramma tendono a uniformarsi.

## Intuizione
La diffusione fa sì che un bit del testo in chiaro influenzi molti bit del cifrato. La confusione fa sì che ogni bit del cifrato dipenda dalla chiave in modo complicato e non lineare. Nei cifrari classici la confusione è la sostituzione, la diffusione è la trasposizione.

## Come si usa
Nei cifrari a blocchi moderni le due idee si applicano ripetutamente, un round dopo l'altro:
- la **confusione** si realizza con le S-box (lookup table non lineari);
- la **diffusione** si realizza con permutazioni ed espansioni.

In DES, l'effetto combinato dell'espansore, delle S-box e della permutazione Perm della funzione $f$ dà l'effetto valanga. Un esercizio della dispensa confronta $f(0)$ e $f(1)$ con chiave nulla e trova 4 bit diversi in posizioni non prevedibili.

## Nei corsi
- **Crittografia** (magistrale): appendice di Critto 5 (Di Scala, 2020), con riferimento a [Shannon49] pp. 708-712; ripresa nella Nota sulla funzione $f$ di DES. Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week5.pdf` (pp. 2, 10, 24); `magistrale/Crittografia/Slide/slides week 1-14/week4/Crypto4.pdf` (p. 11).

## Prerequisiti
- [[Indice di coincidenza]]: l'analisi statistica che la diffusione vuole neutralizzare

## Porta a
- [[Cifrario a blocchi]]: i round alternano confusione e diffusione
- [[Rete a sostituzione-permutazione]]: realizzazione diretta delle due idee
- [[Data Encryption Standard|DES]]: S-box (confusione) e permutazione Perm (diffusione)

## Collegati
- [[Distanza di unicità]]: altro concetto della teoria di Shannon
- [[AES]]: SubBytes confonde, ShiftRows e MixColumns diffondono
