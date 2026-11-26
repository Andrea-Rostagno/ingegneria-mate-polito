---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["sign permanence theorem", "limitatezza locale", "local boundedness"]
tags: [competenza, area/analisi]
---

# Teorema della permanenza del segno

> Se il limite di una funzione è positivo (o $+\infty$), la funzione è positiva in tutto un intorno del punto, escluso al più il punto stesso.

## Definizione / enunciato
**Teorema** (Mazzi, teor. 1.2). Sia $\bar x$ di accumulazione per $A=\operatorname{dom}f$. Se esiste $\lim_{x\to\bar x}f(x)=\ell\ne0$, esiste un intorno $B(\bar x)$ tale che per ogni $x\in B(\bar x)\cap A\setminus\{\bar x\}$ $f(x)$ ha lo stesso segno di $\ell$ (positivo se $\ell=+\infty$, negativo se $\ell=-\infty$).

**Corollario 1.1** (forma "inversa"). Se esiste $\lim f=\ell$ e $f\ge0$ in un intorno bucato, allora $\ell\ge0$ (eventualmente $+\infty$). Non si può migliorare a $>$: $x^2>0$ per $x\ne0$ ma $x^2\to0$.

**Limitatezza locale** (teor. 1.3). Se $\lim_{x\to\bar x}f(x)=\ell\in\mathbb R$, $f$ è localmente limitata in $\bar x$: $\exists B(\bar x),\ M>0:\ |f(x)|\le M$ per $x\in B(\bar x)\cap A\setminus\{\bar x\}$.

## Formule chiave
$$\ell\in(0,+\infty):\ \text{scelto }\varepsilon\le\ell,\quad f(x)>\ell-\varepsilon\ge0\ \text{vicino a }\bar x$$

## Intuizione
Un intorno abbastanza piccolo di un numero positivo contiene solo numeri positivi; la definizione di limite costringe $f$ a starci dentro.

## Come si usa
È il lemma dietro molti teoremi: il primo teorema del confronto, il teorema di Fermat (segno del rapporto incrementale), il legame tra monotonia e segno della derivata, il test delle derivate successive. Per le funzioni continue: se $f(\bar x)>0$ allora $f>0$ vicino a $\bar x$ (cor. 1.2; Morandotti teor. 3.2.7). Per le successioni (Morandotti, teor. 2.2.8-3): se $a_n\to a>0$ allora $a_n>0$ definitivamente.

## Nei corsi
- **Analisi 1** (triennale): "permanenza del segno e limitatezza locale", con dimostrazione. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (§1.3, teor. 1.2-1.3, cor. 1.1-1.3, oss. 1.4, pp. 6-7); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 2.2.8, 3.1.22, 3.2.7); `triennale/ANNO 1/analisi 1/Appunti, riassunti e teoremi/Analisi Matematica 1 - TEOREMI.pdf` (elenco).

## Prerequisiti
- [[Limite di funzione]]: si sceglie un intorno del limite

## Porta a
- [[Teoremi del confronto]]: dimostrazione del primo confronto
- [[Teorema di Fermat]]: passaggio al limite
- [[Monotonia e segno della derivata]]: verso monotona ⇒ f'≥0

## Collegati
- Nessuno.
