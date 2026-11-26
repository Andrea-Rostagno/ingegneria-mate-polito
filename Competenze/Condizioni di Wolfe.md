---
tipo: competenza
area: ottimizzazione
corsi: [Numerical opt]
livello: [magistrale]
aliases: ["Wolfe conditions", "condizione di curvatura", "curvature condition", "condizioni di Armijo-Wolfe"]
tags: [competenza, area/ottimizzazione]
---

# Condizioni di Wolfe

> Coppia di condizioni sul passo $\alpha$ di una line search inesatta: la condizione di Armijo impedisce passi troppo lunghi, quella di curvatura impedisce passi troppo corti. Sono l'ipotesi dei risultati di convergenza globale.

## Definizione / enunciato
Sia $p^{(k)}$ una direzione di discesa in $x^{(k)}$ e $0<c_1<c_2<1$. Il passo $\alpha>0$ soddisfa le condizioni di Wolfe se
$$f(x^{(k)}+\alpha p^{(k)})\le f(x^{(k)})+c_1\,\alpha\,\nabla f(x^{(k)})^Tp^{(k)}\qquad\text{(Armijo, decrescita sufficiente)}$$
$$\nabla f(x^{(k)}+\alpha p^{(k)})^Tp^{(k)}\ \ge\ c_2\,\nabla f(x^{(k)})^Tp^{(k)}\qquad\text{(curvatura)}.$$

## Formule chiave
Con la restrizione $\phi(\alpha):=f(x^{(k)}+\alpha p^{(k)})$, per cui $\phi'(0)=\nabla f(x^{(k)})^Tp^{(k)}<0$:
$$\phi(\alpha)\le\phi(0)+c_1\alpha\,\phi'(0),\qquad \phi'(\alpha)\ge c_2\,\phi'(0).$$

## Intuizione
- **Armijo:** si accetta $\alpha$ solo se il grafico di $\phi$ sta sotto la retta per $(0,\phi(0))$ di pendenza $c_1\phi'(0)$. Questa retta è meno ripida della tangente, e la decrescita richiesta è proporzionale a quella potenziale.
- **Perché serve la curvatura:** Armijo da sola è soddisfatta da $\alpha$ piccolissimi. La condizione di curvatura chiede che in $\alpha$ la pendenza di $\phi$ sia meno negativa di $c_2\phi'(0)$: se è ancora molto negativa, conviene andare più avanti. $c_2\phi'(0)$ è una pendenza intermedia tra $\phi'(0)$ e $c_1\phi'(0)$.
- Gli intervalli ammessi sono l'intersezione delle due condizioni (figure di P2).

## Come si usa
- **In teoria** servono come ipotesi del teorema di Zoutendijk e della convergenza di Newton con line search.
- **In pratica** cercare un $\alpha$ di Wolfe è considerato troppo complicato. Si impone solo Armijo, con backtracking; la scelta di $\alpha_0$, del fattore $\rho$ e del numero massimo di contrazioni evita i passi troppo corti.
- **Nei metodi quasi-Newton** si vuole $s^{(k)T}y^{(k)}>0$. Le note dicono che ciò si ottiene modificando la line search, senza ulteriori dettagli. È proprio ciò che garantisce la condizione di curvatura: fatto standard, non scritto nelle note.

## Nei corsi
- **Numerical opt** (magistrale): lezione su inexact line search di S. Pieraccini, con figure delle regioni ammesse da Armijo, da curvatura e da Wolfe. Fonti: `magistrale/Numerical opt/Pieraccini/Part_2_Lectures_Pieraccini_Nonlinear_Opt_0th_order_1st_order_methods.pdf` (p. 19-22, 26); `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§5.1, Remark 5.1).

## Prerequisiti
- [[Backtracking line search]]: la condizione di Armijo e la sua implementazione pratica
- [[Metodi di discesa]]: serve $\nabla f^Tp<0$

## Porta a
- [[Teorema di Zoutendijk]]: le condizioni di Wolfe sono la sua ipotesi sul passo

## Collegati
- [[Metodi quasi-Newton]]: la line search deve garantire $s^{(k)T}y^{(k)}>0$
