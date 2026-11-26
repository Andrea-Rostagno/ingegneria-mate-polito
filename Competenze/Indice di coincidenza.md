---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [index of coincidence, kappa test di Friedman, Friedman's kappa test, phi test di Kullback, Kullback's phi test, test Kappa, test Phi, analisi delle frequenze, frequency analysis, kappa plaintext, kappa random]
tags: [competenza, area/informatica]
---

# Indice di coincidenza

> La probabilità che due lettere estratte a caso da un testo coincidano. Distingue un testo in lingua da uno casuale, e quindi un cifrario monoalfabetico da uno polialfabetico. Su di esso si basano i test Kappa di Friedman e Phi di Kullback.

## Definizione / enunciato
Sono due costanti della lingua (`Critto_week2.pdf` §2.1.2):
- $\kappa_r$ (*kappa random*): la probabilità di estrarre due lettere uguali da un testo casuale. Per un alfabeto di 26 lettere vale $\kappa_r=1/26=0.0384$;
- $\kappa_p$ (*kappa plaintext*): la stessa probabilità per un testo nella lingua. Per l'inglese $\kappa_p=0.0683$, stimato come $\kappa_p=\sum_x\Pr[L=x]^2$ con frequenze $\Pr[L=a]=32/400$, $\Pr[L=b]=6/400$, ..., $\Pr[L=z]=1/400$.

**Test Kappa di Friedman.** Si sovrappongono due crittogrammi $C_1$ e $C_2$ di $N$ lettere e si contano le coincidenze $n_c$ ($C_{1s}=C_{2s}$). Il kappa osservato è $\kappa_o=n_c/N$. Se $\kappa_o$ è più vicino a $\kappa_p$ che a $\kappa_r$, i due crittogrammi si considerano cifrati con la **stessa chiave**.

**Test Phi di Kullback.** Su un crittogramma $C=C_1\cdots C_N$ si calcola $\varphi_o$ dalle occorrenze $n_a,\dots,n_z$. Se $\varphi_o$ è più vicino a $\varphi_m$ che a $\varphi_r$, il cifrario è **monoalfabetico**.

## Formule chiave
$$\kappa_o=\frac{n_c}{N},\qquad \varphi_o=\sum_{x=a}^{z}n_x(n_x-1),$$
$$\varphi_r=\kappa_r\,N(N-1),\qquad \varphi_m=\kappa_p\,N(N-1).$$

## Intuizione
- Un cifrario monoalfabetico permuta le lettere ma ne conserva la distribuzione, quindi $\sum_x n_x(n_x-1)$ resta quello della lingua.
- Un polialfabetico "spalma" le frequenze, avvicinandole a quelle uniformi.
- Due testi cifrati con la stessa chiave subiscono la stessa sostituzione posizione per posizione, quindi coincidono dove coincidono i testi in chiaro.

## Come si usa
- **Esercizio 2.1.4:** dati due crittogrammi inglesi dello stesso testo, si decide quale dei due è monoalfabetico.
- **Esercizio 2.1.5:** $\varphi_o$ entra nella stima del periodo di Vigenère.

Le dispense ricordano (Nota 2.1.7) che Kullback propone un $\chi$-test che migliora il $\varphi$-test, e che Friedman usa il $\chi^2$ di Pearson per migliorare il kappa-test. Il $\chi^2$ verifica se le frequenze osservate sono coerenti con una distribuzione teorica.

## Nei corsi
- **Crittografia** (magistrale): lezione 2, "Kerckhoffs, Friedman e Kullback", come strumento per ridurre la crittanalisi dei polialfabetici a una sovrapposizione di Kerckhoffs. Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week2.pdf` (Critto 2, pp. 2-6); analisi delle frequenze in `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week1.pdf` (Critto 1, p. 25, figura delle frequenze delle lettere in italiano).

## Prerequisiti
- [[Cifrario di Vigenère]]: il caso d'uso principale
- [[Probabilità condizionata]]: le frequenze sono stime di probabilità

## Porta a
- [[Distanza di unicità]]: la ridondanza della lingua misura quanto testo serve all'attacco

## Collegati
- [[Entropia di Shannon]]: entropia per lettera e ridondanza della lingua
- [[Modelli di attacco crittografico]]: è uno strumento di attacco COA
- [[Cifrario di Cesare]]: l'analisi delle frequenze rompe ogni monoalfabetico
