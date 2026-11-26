---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["normal subgroup", "quotient group", "sottogruppo normale", "gruppo quoziente", "criterio di normalità", "gruppo semplice", "simple group", "G/N", "proiezione canonica"]
tags: [competenza, area/algebra-geometria]
---

# Sottogruppo normale e gruppo quoziente

> Un sottogruppo è normale se le sue classi laterali destre e sinistre coincidono. Solo in questo caso le classi formano a loro volta un gruppo, il quoziente $G/N$.

## Definizione / enunciato
**Def. 10.** $N<G$ è **normale**, $N\lhd G$, se $aN=Na$ per ogni $a\in G$. Si scrive $G/N$ per l'insieme delle classi. In un gruppo abeliano ogni sottogruppo è normale.

**Def. 11.** Un gruppo è **semplice** se non ha sottogruppi normali propri.

**Criterio di normalità.** $N<G$ è normale $\iff$ per ogni $a\in G$ e $h\in N$ si ha $aha^{-1}\in N$.

**Teorema 12 (gruppo quoziente).** Se $N\lhd G$, l'operazione $(aN)(bN)=abN$ rende $G/N$ un gruppo. La proiezione $\pi:G\to G/N$, $a\mapsto aN$, è un omomorfismo con $\mathrm{Ker}\,\pi=N$.

**Prop. 2 (lezione 14).** Se $\varphi:G\to G'$ è un omomorfismo, allora $\mathrm{Ker}\varphi\lhd G$. Quindi i sottogruppi normali sono esattamente i nuclei degli omomorfismi.

## Formule chiave
$$N\lhd G\iff\forall a\in G,\ \forall h\in N:\ aha^{-1}\in N;\qquad (aN)(bN)=abN$$

## Intuizione
Per moltiplicare classi tramite rappresentanti serve che il risultato non dipenda dalla scelta. Con $a'=ac$, $b'=bd$ e $c,d\in N$ serve che $ab(a'b')^{-1}$ stia in $N$, e questo richiede di "far passare" $N$ attraverso $a$, cioè la normalità. Per $\mathbb Z/n\mathbb Z$ questa è la costruzione di $\mathbb Z_n$.

## Come si usa
Esempi delle lezioni:
- in $\Delta_3$, $N=\langle R\rangle$ è normale (indice 2), mentre $\langle D_i\rangle$ non lo è;
- $A_n\lhd S_n$, perché $\tau A_n=A_n\tau$ per ogni trasposizione $\tau$; in generale ogni sottogruppo di indice 2 è normale;
- $SL_n(\mathbb R)\lhd GL_n(\mathbb R)$: per il criterio basta $\det(BAB^{-1})=\det A=1$;
- per verificare la normalità di un nucleo: $\varphi(gag^{-1})=\varphi(g)\,1\,\varphi(g)^{-1}=1$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezione 13 (definizione e quoziente) e lezione 14 (nuclei). La parte bassa di p. 13 è illeggibile. Fonti: `triennale/ANNO 2/istituzioni/Alg-24-10-22.pdf` (lezione 13, pp. 10-13); `triennale/ANNO 2/istituzioni/Alg-25-10-22.pdf` (lezione 14, pp. 3-4, 7).

## Prerequisiti
- [[Teorema di Lagrange sui gruppi]]: classi laterali destre e sinistre
- [[Omomorfismo di gruppi]]: $\pi$ è un omomorfismo e i nuclei sono normali
- [[Segno di una permutazione]]: $A_n=\mathrm{Ker}(\mathrm{sgn})$ è l'esempio guida

## Porta a
- [[Primo teorema di isomorfismo]]: $G/\mathrm{Ker}\varphi\simeq\mathrm{Im}\varphi$
- [[Anello quoziente]]: un ideale è un sottogruppo normale di $(A,+)$

## Collegati
- [[Classi di resto modulo n]]: $\mathbb Z/n\mathbb Z=\mathbb Z_n$ è il primo gruppo quoziente
