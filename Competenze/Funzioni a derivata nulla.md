---
tipo: competenza
area: analisi
corsi: [Analisi 1, Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["functions with zero derivative", "caratterizzazione delle funzioni costanti", "due primitive differiscono per una costante", "teorema della derivata nulla per le distribuzioni"]
tags: [competenza, area/analisi]
---

# Funzioni a derivata nulla

> Su un intervallo, una funzione con derivata ovunque nulla è costante; quindi due primitive della stessa funzione differiscono per una costante.

## Definizione / enunciato
**Corollario 1.3** (Mazzi). Se $f$ è derivabile su un intervallo aperto $I$ e $f'(x)=0$ per ogni $x\in I$, esiste $k\in\mathbb R$ tale che $f(x)=k$ per ogni $x\in I$.

**Corollario 1.4.** Se $f$ è continua su $[a,b]$, derivabile su $(a,b)$ con $f'=0$ su $(a,b)$, allora $f$ è costante su $[a,b]$.

**Conseguenza (Morandotti, prop. 4.2.13).** Due qualunque primitive di una funzione su un intervallo differiscono per una costante.

## Formule chiave
$$f(x)=f(x_0)+f'(c(x))(x-x_0)=f(x_0)\qquad\forall x\in I$$

## Intuizione
Se in ogni istante la velocità è zero, la posizione non cambia. L'ipotesi "intervallo" è essenziale: sull'unione di due intervalli la funzione può essere costante a tratti con costanti diverse.

## Come si usa
Controesempio di Mazzi (oss. 1.8): $\operatorname{sgn}x$ è derivabile per $x\ne0$ con derivata nulla, ma non è costante sul dominio $(-\infty,0)\cup(0,+\infty)$. Per questo l'integrale indefinito su domini non connessi ha una costante per ogni intervallo. Si usa anche per dimostrare identità: se $F'=G'$ su un intervallo e $F(x_0)=G(x_0)$ allora $F=G$ (es. 6 dell'esercitazione 14, 2022-23: dimostrare $\arctan\frac{1+x}{1-x}=\frac\pi4+\arctan x$ per $x<1$).

## Nei corsi
- **Analisi 1** (triennale): "caratterizzazione delle funzioni costanti", collocata dal programma prima delle primitive. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/calcolo differenziale corretto.pdf` (§1.7, cor. 1.3-1.4, oss. 1.8, pp. 19-20); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (prop. 4.2.13, PDF p. 130); `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Primitive.pdf` (prop. 1.1-1.2).
- **Equazioni alle derivate parziali** (triennale): versione distribuzionale. Teor. 5.2.4: $u'=0$ in $\mathcal D'(a,b)$ se e solo se $u=c$ in $\mathcal D'(a,b)$; dimostrazione con $\varphi_0$ di integrale 1, $\bar\varphi=\varphi-\varphi_0\int_a^b\varphi$ e $\psi(x)=\int_a^x\bar\varphi$, che è una funzione test con $\psi'=\bar\varphi$, da cui $\langle u,\varphi\rangle=c\int_a^b\varphi$ con $c=\langle u,\varphi_0\rangle$. Cor. 5.2.5: le soluzioni di $u'=f$ in $\mathcal D'(a,b)$ sono $\bar u+c$; in generale $u=u_h+u_p$. Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 51-52).

## Prerequisiti
- [[Teorema di Lagrange]]: seconda formula dell'incremento finito

## Porta a
- [[Teorema fondamentale del calcolo integrale]]: due primitive differiscono per una costante
- [[Primitive delle funzioni elementari]]: le primitive differiscono per costanti

## Collegati
- [[Soluzione fondamentale di un operatore differenziale]]: la versione in $\mathcal D'$ risolve $U''=\delta_0$ (Equazioni alle derivate parziali)
- [[Derivata distribuzionale]]: il teorema vale anche per la derivata nel senso delle distribuzioni (Equazioni alle derivate parziali)
