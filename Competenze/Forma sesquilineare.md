---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["sesquilinear form", "forma sesquilineare continua", "forma coerciva", "coercive form", "forma associata a un operatore", "F_A"]
tags: [competenza, area/analisi]
---

# Forma sesquilineare

> Una funzione di due variabili lineare nella prima e antilineare nella seconda; su uno spazio di Hilbert le forme continue corrispondono biunivocamente agli operatori limitati tramite $F_A(x,y)=\langle Ax,y\rangle$.

## Definizione / enunciato
$F:X\times Y\to\mathbb F$ è una **forma sesquilineare** (Def. 8.19) se $F(\cdot,y)$ è lineare e $F(x,\cdot)$ è antilineare:
$$F(\alpha x+\alpha'x',y)=\alpha F(x,y)+\alpha'F(x',y),\qquad F(x,\alpha y+\alpha'y')=\bar\alpha F(x,y)+\bar\alpha'F(x,y').$$
(Se $\mathbb F=\mathbb R$ è una forma bilineare.) È **coerciva** (Def. 8.26) se esiste $m>0$ con $F(x,x)\ge m\|x\|^2$.
**Prop. 8.22.** $F$ è continua $\iff\|F\|:=\sup\{|F(x,y)|:\|x\|\le1,\|y\|\le1\}<\infty$, e allora $|F(x,y)|\le\|F\|\|x\|\|y\|$.

## Formule chiave
Prop. 8.23: per $A\in\mathcal L(X,H)$, $F_A(x,y)=\langle Ax,y\rangle_H$ è sesquilineare con $\|F_A\|=\|A\|_{op}$.
Prop. 8.25: se $H$ è di Hilbert, ogni forma sesquilineare continua $F:X\times H\to\mathbb F$ è $F=F_A$ per un unico $A\in\mathcal B(X,H)$ (con $Ax=\Phi^{-1}(\overline{F(x,\cdot)})$, $\Phi$ di Riesz-Fréchet).
Prop. 8.27: se $F_A$ è coerciva, $m\|x\|^2\le\langle Ax,x\rangle\le\|Ax\|\|x\|$, quindi $A$ è coercivo in norma; la dimostrazione conclude che $A$ è un isomorfismo.

## Intuizione
È la versione infinito-dimensionale di "matrice = forma bilineare": il prodotto scalare è la forma sesquilineare hermitiana definita positiva per eccellenza, e ogni altra forma continua è il prodotto scalare "deformato" da un operatore.

## Come si usa
Per passare da un problema variazionale ("trovare $u$ con $F(\phi,u)=\langle\phi,h\rangle$ per ogni $\phi$") a un'equazione operatoriale $Au=\dots$. Esempio delle note (Oss. 8.30): la forma debole di $-u''+Vu=h$ usa $F(\phi,u)=\langle\phi',u'\rangle+\langle\phi,Vu\rangle$ in $L^2(\mathbb R)$.

## Nei corsi
- **Analisi funzionale** (triennale): §8.4 "Forme sesquilineari e teorema di Lax-Milgram" (Def. 8.19, Prop. 8.22-8.25, Def. 8.26, Prop. 8.27). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 121-125); `triennale/ANNO 3/analisi funzionale/07_duale_handout.pdf` (pp. 7-9).

## Prerequisiti
- [[Operatore lineare limitato]]: corrispondenza forme-operatori
- [[Spazio di Hilbert]]: F_A(x,y) = ⟨Ax,y⟩

## Porta a
- [[Teorema di Lax-Milgram]]: forme continue e coercive

## Collegati
- [[Forma quadratica]]: caso reale e finito-dimensionale con matrice simmetrica
- [[Prodotto scalare]]: forma sesquilineare hermitiana definita positiva
- [[Teorema di rappresentazione di Riesz-Fréchet]]: costruisce l'operatore associato
