---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["inverse trigonometric functions", "arcoseno", "arcocoseno", "arcotangente", "arcsin", "arccos", "arctan"]
tags: [competenza, area/analisi]
---

# Funzioni trigonometriche inverse

> Arcoseno, arcocoseno e arcotangente sono le inverse delle funzioni trigonometriche ristrette a un intervallo dove sono iniettive.

## Definizione / enunciato
Seno, coseno e tangente non sono iniettive; restringendo il dominio (Morandotti, (1.41))
$$\sin:\left[-\tfrac\pi2,\tfrac\pi2\right]\to[-1,1],\quad \cos:[0,\pi]\to[-1,1],\quad \tan:\left(-\tfrac\pi2,\tfrac\pi2\right)\to\mathbb R,\quad \cot:(0,\pi)\to\mathbb R$$
si definiscono le inverse (1.42)
$$\arcsin:[-1,1]\to\left[-\tfrac\pi2,\tfrac\pi2\right],\quad \arccos:[-1,1]\to[0,\pi],\quad \arctan:\mathbb R\to\left(-\tfrac\pi2,\tfrac\pi2\right),\quad \operatorname{arccot}:\mathbb R\to(0,\pi).$$

## Formule chiave
$$\arcsin(\sin x)=x\ \text{solo per }x\in\left[-\tfrac\pi2,\tfrac\pi2\right],\qquad \lim_{x\to\pm\infty}\arctan x=\pm\frac\pi2$$
Monotonia (Mazzi Funzioni, es. 1.5): $\arctan$ e $\arcsin$ strettamente crescenti, $\arccos$ strettamente decrescente.

## Intuizione
Si sceglie un "ramo" su cui la funzione trigonometrica è strettamente monotona e quindi invertibile; l'inversa restituisce l'angolo in quel ramo. I grafici sono i simmetrici dei rami rispetto a $y=x$.

## Come si usa
Compaiono nei domini (argomento dell'arcoseno in $[-1,1]$), nei limiti agli infiniti (l'arcotangente ha due asintoti orizzontali $y=\pm\pi/2$) e come primitive: $\int\frac{dx}{1+x^2}=\arctan x+c$, $\int\frac{dx}{\sqrt{1-x^2}}=\arcsin x+c$ (tabella delle primitive di Morandotti, (5.53)). Esercizio di Mazzi Limiti (es. 1.33): $\arctan$ su $\mathbb R$ ha immagine l'intervallo aperto e limitato $(-\pi/2,\pi/2)$; esercitazione 14 (2022-23): verificare se $\arcsin x$ soddisfa le ipotesi di Lagrange sul suo dominio.

## Nei corsi
- **Analisi 1** (triennale): "funzioni elementari e inverse delle funzioni elementari". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (§1.5.2, (1.41)-(1.42), Figura 1.13, PDF p. 37); `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Capitolo Funzioni.pdf` (es. 1.5, p. 10); esercitazioni 2-3 (2021-22, "funzioni elementari", scansioni).

## Prerequisiti
- [[Funzione composta e funzione inversa]]: inverse di restrizioni
- [[Funzioni pari, dispari e periodiche]]: si restringe a un periodo
- [[Formule trigonometriche]]: funzioni di partenza

## Porta a
- Nessuno.

## Collegati
- [[Derivata della funzione inversa]]: derivate di arcsin, arctan
