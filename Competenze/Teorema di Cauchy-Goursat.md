---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["Cauchy-Goursat theorem", "teorema integrale di Cauchy", "Cauchy integral theorem", "teorema di Morera", "Morera's theorem", "dominio semplicemente connesso", "dominio con bordo", "deformazione del cammino"]
tags: [competenza, area/analisi]
---

# Teorema di Cauchy-Goursat

> L'integrale di una funzione analitica lungo un cammino chiuso e semplice in un dominio semplicemente connesso è nullo; il teorema di Morera ne è il viceversa.

## Definizione / enunciato
**Definizione 2.21.** Un dominio $D$ è **semplicemente connesso** se l'interno di ogni cammino di Jordan in $D$ è contenuto in $D$ (un insieme "senza buchi": sì per dischi e poligoni, no per la corona circolare).

**Teorema 2.23 (Cauchy-Goursat).** Sia $f$ analitica nell'aperto $\Omega\subseteq\mathbb C$ e $D\subseteq\Omega$ un dominio semplicemente connesso. Allora per ogni cammino $C$ semplice e chiuso con sostegno in $D$:
$$\oint_C f(z)\,dz=0.$$

**Teorema 2.26 (domini con bordo).** Se $\Omega$ ha frontiera unione di cammini chiusi semplici orientati positivamente (il dominio resta a sinistra) e $f$ è analitica su $\Omega\cup\partial\Omega$, l'integrale su tutto il bordo è nullo. Conseguenza (Oss. 2.28): con bordo $C_1\cup C_2$ entrambi antiorari, $\oint_{C_1}f\,dz=\oint_{C_2}f\,dz$.

**Teorema 2.29 (Morera).** Se $f$ è continua in un dominio semplicemente connesso $D$ e $\oint_Cf\,dz=0$ per ogni cammino semplice chiuso in $D$, allora $f$ è analitica in $D$.

## Formule chiave
Dimostrazione (con $f'$ continua) via teorema di Green (Teorema 2.22):
$$\operatorname{Re}\oint_C f\,dz=-\iint_{\mathrm{int}\,C}(v_x+u_y)\,dx\,dy=0,\qquad \operatorname{Im}\oint_C f\,dz=\iint_{\mathrm{int}\,C}(u_x-v_y)\,dx\,dy=0$$
per le condizioni di Cauchy-Riemann.

## Intuizione
Le CR dicono che le due forme differenziali di $f\,dz$ sono chiuse; in un dominio senza buchi il flusso sul bordo è zero. I buchi (singolarità) sono esattamente ciò che misura il teorema dei residui.

## Come si usa
Per deformare il cammino: l'integrale su una curva complicata attorno a una singolarità si sostituisce con quello su una piccola circonferenza (Oss. 2.28). Per $\oint_C z^n dz$ su $|z|=1$ con $n\ge0$ il teorema dà subito $0$.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §2.6. Fonte: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 2 (1).pdf` (pp. 17-20 del PDF).

## Prerequisiti
- [[Integrale di linea complesso]]: integrale su cammini chiusi
- [[Condizioni di Cauchy-Riemann]]: annullano gli integrandi di Green
- [[Funzione olomorfa]]: ipotesi di analiticità

## Porta a
- [[Formula integrale di Cauchy]]: si applica a $f(z)/(z-z_0)$ con un buco in $z_0$
- [[Teorema dei residui]]: integrale attorno a singolarità isolate

## Collegati
- [[Teorema di Green]]: strumento della dimostrazione
