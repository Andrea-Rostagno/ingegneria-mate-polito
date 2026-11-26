---
tipo: competenza
area: numerica
corsi: [Metodi numerici, Numerical opt]
livello: [triennale, magistrale]
aliases: ["numerical differentiation", "derivazione numerica", "formule alle differenze finite", "finite difference formulas", "differenza finita in avanti", "differenza finita all'indietro", "differenza finita centrata", "forward difference", "backward difference", "central difference", "rapporto incrementale centrato"]
tags: [competenza, area/numerica]
---

# Formule di derivazione numerica

> Approssimazioni delle derivate di $u$ in un punto $x_i$ con rapporti incrementali (differenze finite), ricavate dagli sviluppi di Taylor; il loro ordine dice come l'errore di troncamento decresce con $h$.

## Definizione / enunciato
Da $u(x_i\pm h)=u(x_i)\pm u'(x_i)h+\frac12u''(x_i)h^2\pm\frac16u'''(x_i)h^3+\dots$:
- **in avanti:** $u'(x_i)\approx\dfrac{u(x_i+h)-u(x_i)}h$, errore $\approx-\frac12u''(x_i)h$ (primo ordine, $u\in C^2$);
- **all'indietro:** $u'(x_i)\approx\dfrac{u(x_i)-u(x_i-h)}h$ (primo ordine);
- **centrata:** $u'(x_i)\approx\dfrac{u(x_i+h)-u(x_i-h)}{2h}$, errore $\approx\frac16u'''(x_i)h^2$ (secondo ordine, $u\in C^3$);
- **derivata seconda centrata:**
$$u''(x_i)\approx\frac{u(x_i+h)-2u(x_i)+u(x_i-h)}{h^2},\qquad\text{errore}\approx\frac1{12}u''''(x_i)h^2\ \ (u\in C^4).$$

## Formule chiave
Il rapporto in avanti è $p_1'(x_i)$, con $p_1$ interpolante $u$ in $x_i,x_i+h$ (esatto se $u$ è di primo grado). Il centrato è $p_2'(x_i)$, con $p_2$ interpolante in $x_i-h,x_i,x_i+h$ (esatto per polinomi di secondo grado), ed è la media aritmetica dei rapporti in avanti e all'indietro.

## Intuizione
In aritmetica esatta basterebbe far tendere $h\to0$. In floating point invece $u(x+h)-u(x)$ sottrae due numeri quasi uguali (cancellazione) e l'errore viene moltiplicato per $1/h$: sotto una certa soglia di $h$ l'errore torna a crescere.

## Come si usa
Esempio delle slide: $u(x)=e^x$ in $x=1$ con $h=2^{-k}$, $k=1,\dots,64$. Il grafico dell'errore relativo in scala logaritmica mostra che entrambe le formule prima migliorano e poi peggiorano. La centrata, convergendo più in fretta, raggiunge una buona accuratezza prima che la cancellazione prevalga. Nei metodi successivi del corso le formule servono a **discretizzare** le derivate di un'equazione differenziale, non ad approssimare derivate di funzioni note.

## Nei corsi
- **Metodi numerici** (triennale): breve capitolo "Derivate". Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_06_formule_derivazione.pdf` (p. 2-11).
- **Numerical opt** (magistrale): richiamo in laboratorio, con dimostrazioni via Taylor: differenze in avanti e all'indietro $O(h)$, centrate $O(h^2)$, derivata seconda centrata $\frac{f(x+h)-2f(x)+f(x-h)}{h^2}+O(h^2)$. Il caso a più variabili è nella nota [[Gradiente e hessiana alle differenze finite]]. Fonti: `magistrale/Numerical opt/DellaSanta/2025-10-08-Nota-14-25_annotato.pdf` (p. 1); `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§2).

## Prerequisiti
- [[Formula di Taylor con resto di Lagrange]]: ogni formula viene da uno sviluppo di Taylor
- [[Derivata]]: limite del rapporto incrementale
- [[Interpolazione polinomiale]]: ogni formula è la derivata di un polinomio interpolante

## Porta a
- [[Metodo delle differenze finite]]: si sostituiscono $u'$ e $u''$ in un problema ai limiti
- [[Metodo di Eulero esplicito]]: $y'(x_n)$ sostituita dal rapporto in avanti

## Collegati
- [[Cancellazione numerica]]: limite pratico al rimpicciolire $h$
- [[Rappresentazione di Newton]]: $f[x_1,x_1]=f'(x_1)$, differenze divise come rapporti incrementali
