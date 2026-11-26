---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["ratio test for sequences", "root test for sequences", "criterio del rapporto", "criterio della radice"]
tags: [competenza, area/analisi]
---

# Criteri del rapporto e della radice per successioni

> Per successioni positive, se $a_{n+1}/a_n$ (o $\sqrt[n]{a_n}$) tende a un limite minore di $1$ la successione tende a $0$, se maggiore di $1$ tende a $+\infty$.

## Definizione / enunciato
**Criterio del rapporto** (Mazzi, prop. 1.6). Sia $a_n>0$ definitivamente e $\lim_n\frac{a_{n+1}}{a_n}=\ell$.
- Se $\ell<1$, allora $\lim_n a_n=0$.
- Se $\ell>1$, allora $\lim_n a_n=+\infty$.

**Criterio della radice** (prop. 1.7). Sia $a_n\ge0$ definitivamente e $\lim_n\sqrt[n]{a_n}=\ell$: se $\ell<1$ allora $a_n\to0$; se $\ell>1$ allora $a_n\to+\infty$.

Se $\ell=1$ i criteri non concludono (oss. 1.7): $a_n=1/n$, $a_n=n$, $a_n=\frac{kn}{n+1}$ hanno tutti rapporto che tende a $1$ e limiti $0$, $+\infty$, $k$.

## Formule chiave
$$\frac{a_{n+1}}{a_n}\to\ell<1\Rightarrow a_n\to0,\qquad \frac{a_{n+1}}{a_n}\to\ell>1\Rightarrow a_n\to+\infty$$

## Intuizione
Se ogni termine è circa $\ell$ volte il precedente, la successione si comporta come una geometrica $\ell^n$. Nella dimostrazione: con $\ell<1$ la successione è definitivamente decrescente e positiva, quindi ha limite $m\ge0$; un limite finito non nullo darebbe rapporto $\to1$, quindi $m=0$. Per la radice si confronta $a_n$ con $q^n$ e si usano i carabinieri.

## Come si usa
Esempi svolti da Mazzi (es. 1.17), tutti forme indeterminate: $\frac{b^n}{n^\alpha}\to+\infty$ ($\alpha>0$, $b>1$; rapporto $\to b$), $\frac{n!}{n^\alpha}\to+\infty$, $\frac{b^n}{n!}\to0$ (rapporto $\frac b{n+1}\to0$), $\frac{n^n}{n!}\to+\infty$ (rapporto $\left(1+\frac1n\right)^n\to e>1$). Esercizi tipo: esercitazione 9 (2022-23, "limiti di successioni").

## Nei corsi
- **Analisi 1** (triennale): strumenti per il calcolo dei limiti di successioni. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (§1.7.3, prop. 1.6-1.7, oss. 1.7, es. 1.17, pp. 26-29); `triennale/ANNO 1/analisi 1/Esercitazioni 2022-23 (con svolti)/Esercitazione_09.pdf`.

## Prerequisiti
- [[Teorema sulle successioni monotone]]: la successione è definitivamente monotona
- [[Teoremi del confronto]]: confronto con q^n

## Porta a
- [[Gerarchia degli infiniti]]: dimostra b^n/n^α→+∞

## Collegati
- Nessuno.
