---
tipo: competenza
area: numerica
corsi: [Metodi numerici, Matematica discreta]
livello: [triennale]
aliases: ["fixed-point iteration", "iterazione di punto fisso", "metodo delle approssimazioni successive", "punto fisso", "funzione di iterazione", "punto fisso per sistemi", "contrazione"]
tags: [competenza, area/numerica]
---

# Metodo del punto fisso

> Si riscrive $f(x)=0$ come $x=g(x)$ e si itera $x_{n+1}=g(x_n)$: converge se $g$ è una contrazione vicino al punto fisso.

## Definizione / enunciato
$\alpha$ è **punto fisso** di $g$ se $\alpha=g(\alpha)$. Da $f(\alpha)=0$ si ottiene per esempio $g(x)=x+f(x)/k$, $k\ne0$. Il metodo è $x_{n+1}=g(x_n)$; se $x_n\to\alpha$ e $g$ è continua, allora $\alpha=g(\alpha)$.

**Convergenza locale.** Se $g\in C^1$ vicino ad $\alpha$, $|g'(\alpha)|<1$ e $x_0$ è vicino ad $\alpha$, allora $x_n\to\alpha$. Se $|g'|>1$ in un intorno di $\alpha$ non si converge ad $\alpha$.

**Convergenza globale.** Sia $I$ un intervallo con (1) $g(I)\subseteq I$, (2) $g\in C^1(I)$ (basta $g$ lipschitziana), (3) $\exists m<1$: $|g'(x)|\le m$ su $I$. Allora esiste un unico punto fisso $\alpha\in I$, $x_n\to\alpha$ per ogni $x_0\in I$ e $\lim\frac{\alpha-x_{n+1}}{\alpha-x_n}=g'(\alpha)$.
*Dimostrazione:* esistenza da (1) e continuità; unicità e convergenza dal teorema di Lagrange, $|\alpha-x_n|=|g'(\xi_{n-1})||\alpha-x_{n-1}|\le m^n|\alpha-x_0|$.

## Formule chiave
$$|\alpha-x_n|\le\frac{m^n}{1-m}|x_1-x_0|,\qquad |\alpha-x_{n+1}|\le\frac{m}{1-m}|x_{n+1}-x_n| .$$
Ordine: $p=1$ se $g'(\alpha)\ne0$; $p=k$ se $g'(\alpha)=\dots=g^{(k-1)}(\alpha)=0\ne g^{(k)}(\alpha)$ (dal Taylor di $g$ in $\alpha$).

**Sistemi.** $f(\mathbf x)=\mathbf o$ si scrive $\mathbf x=\phi(\mathbf x)$ e si itera $\mathbf x^{(n+1)}=\phi(\mathbf x^{(n)})$. Se $J$ è la jacobiana di $\phi$, $\|J(\mathbf x)\|\le L<1$ sulla palla chiusa $\bar S_r(\mathbf x^{(0)})$ e $\|\phi(\mathbf x^{(0)})-\mathbf x^{(0)}\|\le(1-L)r$, allora le iterate restano in $S_r$, convergono all'unica soluzione in $\bar S_r$ e $\|\alpha-\mathbf x^{(n)}\|\le\frac{L^n}{1-L}\|\mathbf x^{(1)}-\mathbf x^{(0)}\|$.

## Intuizione
Ogni passo moltiplica l'errore per $g'(\xi)$: se questo fattore è minore di 1 l'errore si contrae, e più è piccolo più si va veloce. Con $m\le1/2$ l'incremento $|x_{n+1}-x_n|$ maggiora l'errore, quindi è un criterio di arresto affidabile.

## Come si usa
Esempio delle slide per $\sqrt2$ da $x^4-4=0$, $x_0=1$: con $g(x)=x+(x^4-4)$ si ha $|g'|=|1+4x^3|>1$ e le iterate esplodono ($-2,10,10^4,\dots$); con $g(x)=x-(x^4-4)/11$ si ha $|g'|<1$ su $I=(0,\sqrt[3]{11/2})$ e l'errore scende a $3.36\cdot10^{-12}$ in 8 passi. Function `puntofisso(g,x0,nmax,tol)`.

## Nei corsi
- **Metodi numerici** (triennale): una equazione e sistemi. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_04_sistemi_non_lineari_print.pdf` (p. 33-47 una equazione, p. 57-58 sistemi); codice `triennale/ANNO 2/metodi numerici/puntofisso.m`.
- **Matematica discreta** (triennale): la stessa iterazione è vista come successione ricorsiva $a_{n+1}=f(a_n)$ e studiata in modo qualitativo: punti di equilibrio, diagramma a tela di ragno, stabilità. Il "teorema delle contrazioni" vale per $f:\mathbb R\to\mathbb R$ lipschitziana con $L\in\,]0,1[$: unico punto fisso, globalmente attrattivo, con $|a_n-x_0|\le L^n|a_0-x_0|$. Se $|f'(x_0)|<1$ l'equilibrio è localmente attrattivo; se $|f'(x_0)|>1$ nessuna successione vi converge se non lo raggiunge. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/06 - Successioni ricorsive non lineari.pdf` (lezione 6, pp. 13-17, manoscritto).

## Prerequisiti
- [[Teorema di Lagrange]]: stima $|g(\alpha)-g(x_n)|\le m|\alpha-x_n|$
- [[Ordine di convergenza di un metodo iterativo]]: ordine dalle derivate di $g$

## Porta a
- [[Metodo di Newton]]: caso particolare con $g=x-f/f'$

## Collegati
- [[Teorema di esistenza e unicità locale]]: stessa idea di contrazione (condizione di Lipschitz con costante minore di 1)
- [[Metodo iterativo stazionario]]: versione lineare $\mathbf x^{(k)}=B\mathbf x^{(k-1)}+\mathbf c$
- [[Matrice jacobiana]]: condizione $\|J\|\le L<1$ nel caso dei sistemi
- [[Criteri di arresto dei metodi iterativi]]: arresto su $|x-x_0|\le$ tol
- [[Punto di equilibrio di una successione ricorsiva]]: la stessa iterazione letta come sistema dinamico discreto (Matematica discreta)
- [[Stabilità dei punti di equilibrio]]: attrattività e teorema delle contrazioni per le successioni ricorsive (Matematica discreta)
