---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [Rabin cryptosystem, sistema di Rabin, cifrario di Rabin, Rabin textbook, criptosistema di Rabin]
tags: [competenza, area/informatica]
---

# Crittosistema di Rabin

> Cifrario a chiave pubblica in cui cifrare significa elevare al quadrato modulo $N=pq$. Romperlo equivale, in modo dimostrato, a fattorizzare $N$.

## Definizione / enunciato
Rabin textbook (`Crypto9.pdf` §9.2.2, p. 9; `Critto8.pdf` p. 25):
- **Gen:** si scelgono due primi $p,q\equiv3\pmod4$ di grandezza simile e si pone $N=pq$. La chiave pubblica è $N$, quella privata $(p,q)$.
- **Enc:** $C=m^2 \bmod N$, con $m\in\mathbb Z_N$.
- **Dec:** si calcolano le radici quadrate di $C$ modulo $p$ e modulo $q$, poi si combinano con il teorema cinese dei resti.

## Formule chiave
**Radici modulo un primo $p\equiv3\pmod4$** (`Critto8.pdf` p. 26): se $c=a^2$,
$$\big(c^{(p+1)/4}\big)^2\equiv c\,c^{(p-1)/2}\equiv c\,a^{p-1}\equiv c\pmod p.$$

**Decifratura** (`Critto8.pdf` p. 27):
1. $m_p=C^{(p+1)/4}\bmod p$ e $m_q=C^{(q+1)/4}\bmod q$;
2. con l'algoritmo di Euclide si trovano $a,b$ tali che $ap+bq=1$;
3. le quattro radici sono
$$M_{1,2,3,4}=\pm\,ap\,m_q\pm bq\,m_p \pmod n.$$

In `Crypto9.pdf` p. 9 l'esponente di $m_q$ è stampato come $(p+1)/4$: è un refuso per $(q+1)/4$.

## Intuizione
Senza $(p,q)$ estrarre radici quadrate modulo $n$ è intrattabile. Con $(p,q)$ basta un'esponenziazione per ciascun primo.

Il prezzo è l'ambiguità: ci sono 4 candidati. Si aggiunge allora ridondanza, ad esempio una sequenza standard all'inizio o alla fine del messaggio, per riconoscere quello giusto (`Critto8.pdf` p. 28).

## Come si usa
**Equivalenza con la fattorizzazione** (`Critto8.pdf` pp. 29-30). Chi sa estrarre radici modulo $n$ fattorizza $n$ così:
1. sceglie $x\in\mathbb Z_n^*$ e calcola $a=x^2$;
2. ottiene una radice $y$ di $a$;
3. se $y\neq\pm x$, allora $\gcd(y-x,n)$ è un fattore di $n$, perché $(y-x)(y+x)\equiv0\pmod n$.

Per RSA questa equivalenza non è nota.

**Esercizio delle dispense** (`Crypto9.pdf` p. 9): con $p=7$, $q=11$ e $C=23$ si chiedono i quattro candidati.

## Nei corsi
- **Crittografia** (magistrale): Di Scala lo dà come "Rabin textbook", Bazzanella con la dimostrazione dell'equivalenza con la fattorizzazione. Fonti:
  - `magistrale/Crittografia/Slide/slides week 1-14/week9/Crypto9.pdf` (§9.2.2, p. 9);
  - `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto8.pdf` (pp. 24-30).

## Prerequisiti
- [[Residui quadratici]]: la decifratura estrae radici quadrate modulo $p$ e $q$
- [[Teorema cinese dei resti]]: ricompone le radici modulo $n$
- [[Algoritmo di Euclide]]: fornisce i coefficienti $ap+bq=1$
- [[Piccolo teorema di Fermat]]: giustifica la formula $c^{(p+1)/4}$

## Porta a
- [[Firma digitale]]: l'articolo di Rabin del 1979 riguarda firme e funzioni a chiave pubblica

## Collegati
- [[RSA]]: stessa struttura $N=pq$, ma senza equivalenza dimostrata con la fattorizzazione
- [[Crittografia a chiave pubblica]]: è un esempio di schema (Gen, Enc, Dec)
- [[Funzione one-way]]: l'elevamento al quadrato modulo $N$ è una one-way trapdoor
