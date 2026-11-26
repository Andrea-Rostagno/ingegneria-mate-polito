---
tipo: competenza
area: fisica
corsi: [Chimica]
livello: [triennale]
aliases: ["first-order kinetics", "reazione del primo ordine", "first-order reaction", "legge cinetica integrata del primo ordine", "tempo di dimezzamento", "half-life", "t1/2"]
tags: [competenza, area/fisica]
---

# Cinetica del primo ordine

> Se la velocità è proporzionale alla concentrazione di un solo reagente, la concentrazione decresce esponenzialmente e il tempo di dimezzamento $t_{1/2}=\ln2/k$ non dipende dalla concentrazione iniziale.

## Definizione / enunciato
Per una reazione monomolecolare $\mathrm A\xrightarrow{k}\mathrm B$ del primo ordine $v=-d[\mathrm A]/dt=k[\mathrm A]$. Separando le variabili e integrando tra 0 e $t$ si ottiene la **legge integrata**: il logaritmo della concentrazione decresce linearmente nel tempo, e la concentrazione decresce in modo esponenziale; un grafico di $\ln[\mathrm A]$ contro $t$ (semilogaritmico) è una retta di pendenza $-k$. Più grande $k$, più rapido il decadimento.
**Tempo di dimezzamento** $t_{1/2}$: tempo perché $[\mathrm A]$ si riduca alla metà del valore iniziale; per il primo ordine è indipendente da $[\mathrm A]_0$.

## Formule chiave
$$-\frac{d[\mathrm A]}{dt}=k[\mathrm A],\qquad \ln[\mathrm A]=\ln[\mathrm A]_0-kt,\qquad [\mathrm A]=[\mathrm A]_0e^{-kt},\qquad t_{1/2}=\frac{\ln2}{k}$$

## Intuizione
In ogni intervallo $t_{1/2}$ scompare metà di quello che c'è: dopo $n$ tempi di dimezzamento resta $[\mathrm A]_0/2^n$, qualunque sia il punto di partenza.

## Come si usa
Esempio di p. 32: $k=6{,}93$ s$^{-1}$, $t_{1/2}=0{,}1$ s, $[\mathrm A]_0=1$ mM: dopo un $t_{1/2}$ 0,5 mM, dopo due 0,25 mM, dopo tre 0,125 mM. Il decadimento radioattivo segue questa cinetica.

## Nei corsi
- **Chimica** (triennale): Lezione 18. Fonti: `triennale/ANNO 1/chimica/C. Gerbaldi - CHIMICA - 18 - Cinetica chimica.pdf` (lezione 18, pp. 24-27, 30, 32).

## Prerequisiti
- [[Legge cinetica]]: caso v = k[A]
- [[Equazioni a variabili separabili]]: si separano le variabili e si integra

## Porta a
- [[Decadimento radioattivo]]: il decadimento è del primo ordine

## Collegati
- [[Cinetiche di ordine zero e del secondo ordine]]: confronto dei grafici linearizzati
