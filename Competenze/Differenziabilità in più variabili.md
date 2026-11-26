---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["differentiability", "funzione differenziabile", "piano tangente", "tangent plane", "criterio di differenziabilità", "teorema del differenziale totale", "sviluppo di Taylor al primo ordine"]
tags: [competenza, area/analisi]
---

# Differenziabilità in più variabili

> $f$ è differenziabile in $P_0$ se il piano (iperpiano) costruito con le derivate parziali approssima il grafico con un errore $o(\|P-P_0\|)$.

## Definizione / enunciato
$f$, definita in un intorno di $P_0\in\mathbb R^n$, è **differenziabile in $P_0$** se
1. esistono le $n$ derivate parziali in $P_0$;
2. vale lo sviluppo al primo ordine
$$f(P)=f(P_0)+\nabla f(P_0)\cdot(P-P_0)+o(\|P-P_0\|)\quad\text{per }P\to P_0.$$
Per $n=2$ la condizione 2 equivale a
$$\lim_{(x,y)\to(x_0,y_0)}\frac{f(x,y)-f(x_0,y_0)-f_x(x_0,y_0)(x-x_0)-f_y(x_0,y_0)(y-y_0)}{\sqrt{(x-x_0)^2+(y-y_0)^2}}=0.$$
**Criterio di differenziabilità.** Se le derivate parziali esistono in un intorno di $P_0$ e sono continue in $P_0$, allora $f$ è differenziabile in $P_0$. La condizione è sufficiente ma non necessaria: $f=y|x|$ è differenziabile in $(0,0)$ senza avere le derivate parziali in un intorno.

## Formule chiave
Piano tangente al grafico in $(x_0,y_0,f(x_0,y_0))$:
$$z=f(x_0,y_0)+f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0).$$

## Intuizione
Il numeratore è lo scarto di quota tra grafico e piano, il denominatore la distanza orizzontale: l'errore deve essere trascurabile rispetto allo spostamento. In una variabile "derivabile" e "differenziabile" coincidono, in più variabili no. Esercizio della lezione: per l'area $f(x,y)=xy$ di un rettangolo, $f(x_0+\Delta x,y_0+\Delta y)=x_0y_0+y_0\Delta x+x_0\Delta y+\Delta x\Delta y$ e il quadratino $\Delta x\Delta y$ è proprio l'$o(\|P-P_0\|)$. Per approssimare $\sqrt{1{,}01}\,e^{0{,}04}$ si usa il piano tangente di $\sqrt x\,e^y$ in $(1,0)$.

## Come si usa
Si verifica con il criterio (derivate parziali continue), oppure col limite della definizione nei punti sospetti. Conseguenze: continuità, derivate direzionali $\nabla f\cdot v$, regola della catena.

## Nei corsi
- **Analisi 2** (triennale): lezioni del 05/10 e 10/10/2022. Fonti: `triennale/ANNO 2/analisi 2/AII 03 2033 differenziabilita.pdf` (pp. 6-13); `triennale/ANNO 2/analisi 2/AII 04 2022 differenziabilita e derivate successive.pdf` (pp. 1-3, 10-11).

## Prerequisiti
- [[Limiti e continuità in più variabili]]: resto infinitesimo per P→P0
- [[Derivate parziali]]: condizione 1 della definizione
- [[Simboli di Landau]]: resto o(||P-P0||)

## Porta a
- [[Gradiente]]: conseguenze della differenziabilità
- [[Regola della catena in più variabili]]: derivata della funzione composta
- [[Punti critici in più variabili]]: condizione necessaria ∇f=0
- [[Formula di Taylor in più variabili]]: sviluppo al secondo ordine

## Collegati
- [[Derivata]]: in una variabile derivabile e differenziabile coincidono
- [[Condizioni di Cauchy-Riemann]]: differenziabilità di u e v
