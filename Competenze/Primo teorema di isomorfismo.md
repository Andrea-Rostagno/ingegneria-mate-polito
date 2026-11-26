---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["first isomorphism theorem", "teorema fondamentale degli omomorfismi di gruppi", "I teorema di isomorfismo", "G/Ker ≅ Im"]
tags: [competenza, area/algebra-geometria]
---

# Primo teorema di isomorfismo

> Ogni omomorfismo di gruppi si fattorizza come proiezione sul quoziente per il nucleo seguita da un omomorfismo iniettivo. Quindi $G/\mathrm{Ker}\varphi\simeq\mathrm{Im}\varphi$.

## Definizione / enunciato
**I teorema di isomorfismo** (teorema fondamentale degli omomorfismi di gruppi). Siano $\varphi:G\to G'$ un omomorfismo, $K=\mathrm{Ker}\varphi$ e $\pi:G\to G/K$ la proiezione canonica.
- Esiste un omomorfismo **iniettivo** $\bar\varphi:G/K\to G'$ con $\bar\varphi\circ\pi=\varphi$, cioè il diagramma commuta.
- In particolare $G/K\simeq\mathrm{Im}\varphi$.

**Cor. 3.** Se $\varphi$ è suriettivo, $G/\mathrm{Ker}\varphi\simeq G'$.

## Formule chiave
$$\bar\varphi(aK)=\varphi(a),\qquad \bar\varphi\circ\pi=\varphi,\qquad G/\mathrm{Ker}\varphi\simeq\mathrm{Im}\varphi$$

## Intuizione
$\varphi$ non distingue elementi che differiscono per un elemento del nucleo. Se li si identifica (quoziente), quello che resta è una copia fedele dell'immagine.

## Come si usa
Dimostrazione (pp. 5-6):
1. $\bar\varphi$ è ben definita: se $b=ak$ con $k\in K$, allora $\varphi(b)=\varphi(a)\varphi(k)=\varphi(a)$.
2. È un omomorfismo perché lo è $\varphi$.
3. È iniettiva: $\bar\varphi(aK)=1$ implica $a\in K$, cioè $aK=K$.

Esercizio svolto a lezione: se $|G|=m$ e $|H|=n$ sono coprimi, l'unico omomorfismo $G\to H$ è quello banale.
- $|\mathrm{Im}\varphi|$ divide $n$, per Lagrange in $H$.
- $|\mathrm{Im}\varphi|=|G|/|\mathrm{Ker}\varphi|$ divide $m$.
- Quindi $|\mathrm{Im}\varphi|=1$.

Lo stesso schema, con un ideale al posto del sottogruppo normale, dà il teorema per gli anelli. Per esempio, la valutazione $p(x)\mapsto p(i)$ dà $\mathbb R[x]/(x^2+1)\simeq\mathbb C$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezione 14. Fonti: `triennale/ANNO 2/istituzioni/Alg-25-10-22.pdf` (lezione 14, pp. 4-8).

## Prerequisiti
- [[Sottogruppo normale e gruppo quoziente]]: il nucleo è normale e $G/K$ è un gruppo
- [[Omomorfismo di gruppi]]: nucleo, immagine, criterio di iniettività

## Porta a
- [[Teorema fondamentale degli omomorfismi di anelli]]: stessa fattorizzazione per gli anelli

## Collegati
