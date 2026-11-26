---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra, Crittografia, Blockchain e criptoeconomia]
livello: [triennale, magistrale]
aliases: ["Lagrange's theorem (group theory)", "classi laterali", "cosets", "laterali destri", "laterali sinistri", "indice di un sottogruppo", "index of a subgroup", "[G:H]", "gruppi di ordine primo"]
tags: [competenza, area/algebra-geometria]
---

# Teorema di Lagrange sui gruppi

> In un gruppo finito l'ordine di ogni sottogruppo divide l'ordine del gruppo. La dimostrazione divide $G$ in classi laterali, tutte della stessa grandezza.

## Definizione / enunciato
Sia $H<G$.
- **Classi laterali destre:** la relazione $a\sim_Hb\iff ba^{-1}\in H$ è d'equivalenza e ha classi $Ha=\{ha\mid h\in H\}$ (Def. 1).
- **Classi laterali sinistre:** analogamente, da $a^{-1}b\in H$, con classi $aH$ (Def. 2).
- **Prop. 3:** $aH\mapsto Ha^{-1}$ è una biiezione tra classi sinistre e destre.
- **Indice** $[G:H]$: il numero di classi laterali (Def. 4). Per esempio $[\mathbb Z:n\mathbb Z]=n$ e $[G:\{1\}]=|G|$.

**Teorema 5 (Lagrange).** Se $G$ è finito e $H<G$, allora $|G|=[G:H]\,|H|$. In particolare $|H|$ divide $|G|$.

Corollari:
- **Cor. 6:** l'ordine di ogni elemento divide $|G|$.
- **Cor. 7:** $x^{|G|}=1_G$ per ogni $x\in G$.
- **Prop. 8:** un gruppo di ordine primo $p$ è ciclico, e quindi $\cong\mathbb Z_p$.

## Formule chiave
$$|G|=[G:H]\,|H|,\qquad \mathrm{ord}(x)\mid|G|,\qquad x^{|G|}=1_G$$

## Intuizione
Le classi laterali sono "copie traslate" di $H$: $h\mapsto ah$ è una biiezione $H\to aH$. Le classi formano una partizione di $G$ e hanno tutte $|H|$ elementi, quindi $|G|$ è un multiplo di $|H|$.

## Come si usa
- **Il viceversa è falso:** non per ogni divisore $d$ di $|G|$ esiste un sottogruppo di ordine $d$. Vale però per i gruppi ciclici.
- **In $\mathbb Z$:** con $H=n\mathbb Z$, $a\sim_H b$ è la congruenza modulo $n$ e $\mathbb Z/\sim_{n\mathbb Z}=\mathbb Z_n$.
- **Classi destre e sinistre diverse:** in $\Delta_3$ con $H=\langle D_1\rangle$ si trova $HR=\{R,D_2\}\neq RH=\{R,D_3\}$.
- **Esercizio svolto a lezione:** se $|G|$ e $|H|$ sono coprimi, l'unico omomorfismo $G\to H$ è quello banale.
- Con Cor. 7 applicato a $\mathbb Z_p^*$ si ottiene il piccolo teorema di Fermat.

## Nei corsi
- **Istituzioni algebra** (triennale): lezione 13, richiamato nella 14. Fonti: `triennale/ANNO 2/istituzioni/Alg-24-10-22.pdf` (lezione 13, pp. 2-10); `triennale/ANNO 2/istituzioni/Alg-25-10-22.pdf` (lezione 14, pp. 2-3, 8).
- **Crittografia** (magistrale): enunciato in breve ("l'ordine di un sottogruppo divide l'ordine del gruppo"). Si usa su $\mathbb Z_n^*$: l'ordine di ogni $g$ divide $\varphi(n)$, e se ne ricava $a^{\varphi(n)}\equiv1\pmod n$ (Esercizio 6.1.11), cioè il teorema di Eulero alla base di RSA. Il sottogruppo dei residui quadratici di $\mathbb Z_p^*$, con $p=2q+1$ e $q$ primo, ha ordine $q$. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week6/Crypto6.pdf` (§6.1.2, p. 5; §6.3, p. 9).
- **Blockchain e criptoeconomia** (magistrale): le slide lo citano esplicitamente per secp256k1. Il numero $n$ di punti della curva è primo, quindi "grazie al Teorema di Lagrange qualunque punto non nullo della curva è un generatore", e $G$ lo è sicuramente. Fonte: `magistrale/Blockchain e criptoeconomia/03-Bitcoin.pdf` (p. 19).

## Prerequisiti
- [[Relazione di equivalenza]]: le classi laterali sono classi d'equivalenza e formano una partizione
- [[Sottogruppo]]: $H<G$
- [[Ordine di un elemento]]: per i corollari, $\mathrm{ord}(x)=|\langle x\rangle|$

## Porta a
- [[Sottogruppo normale e gruppo quoziente]]: quando classi destre e sinistre coincidono
- [[Piccolo teorema di Fermat]]: Lagrange applicato a $\mathbb Z_p^*$
- [[Campo finito]]: $a^{p^n-1}=1$ nel gruppo $K^*$
- [[Funzione phi di Eulero]]: teorema di Eulero $a^{\varphi(n)}\equiv1$ (Crittografia)
- [[Curva ellittica]]: ordine primo, quindi ogni punto non nullo genera il gruppo (Blockchain e criptoeconomia)

## Collegati
- [[Gruppo ciclico]]: per i ciclici vale il viceversa
- [[Gruppo diedrale]]: esempio di classi laterali destre diverse da quelle sinistre
