---
tipo: competenza
area: algebra-geometria
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["counting using recurrence relations", "conteggio ricorsivo", "problema della tassellazione", "tiling problem", "stringhe con una sottostringa", "stringhe ternarie"]
tags: [competenza, area/algebra-geometria]
---

# Conteggio con relazioni ricorsive

> Quando non si riesce a contare direttamente gli oggetti di taglia $n$, li si classifica in base a come iniziano. Si ottiene una ricorrenza che lega $a_n$ ai valori precedenti, e poi la si risolve.

## Definizione / enunciato
**Metodo.** Sia $a_n$ il numero di oggetti di taglia $n$.
1. Si calcolano a mano i primi valori, che fanno da dati iniziali.
2. Si spezza l'insieme secondo il primo pezzo (regola della somma). Ogni caso lascia un oggetto di taglia minore, contato da un $a_{n-j}$.
3. Si scrive la ricorrenza e la si risolve con la teoria delle ricorrenze lineari.

## Formule chiave
- **Tassellazione $n\times2$** con quadrati $2\times2$ e rettangoli $1\times2$ (in due orientazioni):
$$a_n=a_{n-1}+2a_{n-2},\qquad a_1=1,\ a_2=3.$$
- **Stringhe ternarie** (alfabeto $\{a,b,c\}$) di lunghezza $n$: $s_n=3s_{n-1}$, $s_1=3$, e quindi $3^n$, come nel conteggio diretto.
- **Stringhe ternarie che contengono "cc":**
$$s_n=2s_{n-1}+2s_{n-2}+3^{\,n-2},\qquad s_1=0,\ s_2=1.$$

## Intuizione
Il primo pezzo "consuma" una parte dell'oggetto e lascia un problema dello stesso tipo ma più piccolo. Per questo le ricorrenze di conteggio sono quasi sempre lineari. Diventano non omogenee quando un caso si chiude senza lasciare un sottoproblema dello stesso tipo, come "cc", dopo cui il resto della stringa è libero.

## Come si usa
**Tassellazione** (lezione 5). Il rettangolo si può iniziare in tre modi:
- un rettangolo verticale lascia $n-1$ colonne, quindi $a_{n-1}$ modi;
- un quadrato lascia $n-2$ colonne, quindi $a_{n-2}$ modi;
- due rettangoli orizzontali lasciano $n-2$ colonne, quindi $a_{n-2}$ modi.

L'equazione caratteristica $x^2-x-2=0$ ha radici $2$ e $-1$, quindi $a_n=A2^n+B(-1)^n$. La lezione suggerisce di ricavare un dato iniziale "virtuale" $a_0$ compatibile con la relazione: da $3=1+2a_0$ segue $a_0=1$. Con $a_0=a_1=1$ si ottiene $a_n=\frac{2^{n+1}+(-1)^n}3$ (calcolo fatto qui con i dati della lezione; si ha $a_2=3$).

**Stringhe con "cc"** (lezione 5). Una stringa che inizia con $a$ o con $b$ lascia $s_{n-1}$ possibilità ciascuna; una che inizia con $ca$ o $cb$ lascia $s_{n-2}$ possibilità ciascuna; una che inizia con $cc$ è già ammissibile e lascia $3^{n-2}$ code libere. Si ottiene una ricorrenza non omogenea del secondo ordine.

**Trenini** (Tilli §3.1): stessa logica, e si ritrovano i numeri di Fibonacci.

## Nei corsi
- **Matematica discreta** (triennale): lezione 5, esempi "modellistici" e "non omogeneo"; le dispense dedicano una sezione a questo metodo. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/05 - Successioni ricorsive lineari.pdf` (lezione 5, pp. 14-15, 19-20); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§3.4, pp. 58-69).

## Prerequisiti
- [[Relazioni ricorsive lineari omogenee]]: per risolvere la tassellazione
- [[Relazioni ricorsive lineari non omogenee]]: per risolvere le stringhe con "cc"
- [[Regola della somma]]: si spezza secondo il primo pezzo

## Porta a
- Nessuno nel corso.

## Collegati
- [[Numeri di Fibonacci]]: il problema dei trenini dà la ricorrenza di Fibonacci
