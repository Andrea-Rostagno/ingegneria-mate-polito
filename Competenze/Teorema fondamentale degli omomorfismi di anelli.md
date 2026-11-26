---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["first isomorphism theorem for rings", "primo teorema di isomorfismo per anelli", "A/Ker ≅ Im", "teorema fondamentale degli omomorfismi"]
tags: [competenza, area/algebra-geometria]
---

# Teorema fondamentale degli omomorfismi di anelli

> Un omomorfismo di anelli si fattorizza attraverso il quoziente per il nucleo, quindi $A/\mathrm{Ker}\varphi\simeq\mathrm{Im}\varphi$. È lo strumento standard per riconoscere un anello quoziente.

## Definizione / enunciato
**Teorema 11.** Siano $\varphi:A\to A'$ un omomorfismo di anelli e $K=\mathrm{Ker}\varphi$.
- Esiste un omomorfismo di anelli $\bar\varphi:A/K\to A'$ con $\bar\varphi\circ\pi=\varphi$, dove $\pi:A\to A/K$ è la proiezione.
- In particolare $A/K\simeq\mathrm{Im}\varphi$.
- Se $\varphi$ è unitario lo è anche $\bar\varphi$, perché $\bar\varphi(K+1)=\varphi(1)=1_{A'}$.

## Formule chiave
$$\bar\varphi(K+a)=\varphi(a),\qquad A/\mathrm{Ker}\varphi\simeq\mathrm{Im}\varphi$$

## Intuizione
Il teorema per i gruppi abeliani $(A,+)$ dà già $\bar\varphi$ come isomorfismo di gruppi su $\mathrm{Im}\varphi$. Resta da verificare il prodotto:
$$\bar\varphi((K+a)(K+b))=\varphi(ab)=\varphi(a)\varphi(b).$$

## Come si usa
Ricetta: per mostrare che $A/I\simeq B$ si cerca un omomorfismo suriettivo $A\to B$ con nucleo $I$.

Esempi delle lezioni:
- $\varphi:\mathbb R[x]\to\mathbb R$, $\sum a_ix^i\mapsto a_0$, è suriettivo con nucleo $(x)$, quindi $\mathbb R[x]/(x)\simeq\mathbb R$;
- la valutazione $p(x)\mapsto p(i)$ da $\mathbb R[x]$ a $\mathbb C$ è suriettiva con nucleo $(x^2+1)$, quindi $\mathbb R[x]/(x^2+1)\simeq\mathbb C$;
- la valutazione $p(x)\mapsto p(\sqrt3)$ ha nucleo $(x^2-3)$, quindi $\mathbb Q[x]/(x^2-3)\simeq\mathbb Q[\sqrt3]$;
- in generale $\Phi:K[x]\to F$, $f\mapsto f(s)$, dà $K[x]/(p(x))\simeq K[s]$ se $p$ è il polinomio minimo di $s$;
- con il morfismo unitario, $\mathbb Z/m\mathbb Z=\mathbb Z_m$ si immerge in ogni anello di caratteristica $m$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 20-21, usato poi nelle 31/32 e 33/34. Fonti: `triennale/ANNO 2/istituzioni/Alg-09-11-22.pdf` (lezioni 20-21, pp. 11-13); `triennale/ANNO 2/istituzioni/Alg-13-12-22.pdf` (lezioni 31/32, pp. 7-8); `triennale/ANNO 2/istituzioni/Alg-14-12-22.pdf` (lezioni 33/34, pp. 7-8, 17).

## Prerequisiti
- [[Anello quoziente]]: $A/K$ è un anello
- [[Omomorfismo di anelli]]: il nucleo è un ideale
- [[Primo teorema di isomorfismo]]: la versione per gruppi fornisce $\bar\varphi$

## Porta a
- [[Estensione semplice]]: $K[x]/(p)\simeq K[s]$

## Collegati
- [[Numeri complessi]]: $\mathbb R[x]/(x^2+1)\simeq\mathbb C$
