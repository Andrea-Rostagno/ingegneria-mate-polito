---
tipo: competenza
area: analisi
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["rarefaction wave", "ventaglio di rarefazione", "rarefaction fan", "onda di espansione"]
tags: [competenza, area/analisi]
---

# Onda di rarefazione

> Soluzione continua del problema di Riemann che riempie a ventaglio la regione non raggiunta dalle caratteristiche, imponendo $f'(u)=x/t$.

## Definizione / enunciato
Con $f''>0$ e $u_\ell<u_r$ resta la regione $D=\{(x,t):f'(u_\ell)t<x<f'(u_r)t\}$ senza caratteristiche. Si impone in $D$ che le caratteristiche escano dall'origine, $f'(u)=\frac xt$; poiché $f'$ è monotona è invertibile, e (L18 p. 2)
$$u(x,t)=\begin{cases}u_\ell&x<f'(u_\ell)t\\(f')^{-1}\!\left(\frac xt\right)&f'(u_\ell)t<x<f'(u_r)t\\u_r&x>f'(u_r)t.\end{cases}$$
È **continua** ma in generale non derivabile: è soluzione debole, non classica.

## Formule chiave
Verifica in $D$ (L18 p. 3), con $g=(f')^{-1}$:
$$\partial_tu+f'(u)\partial_xu=-g'\!\left(\tfrac xt\right)\tfrac x{t^2}+\tfrac xt\,g'\!\left(\tfrac xt\right)\tfrac1t=0 .$$
**Burgers** $f(u)=u^2/2$, $(f')^{-1}(u)=u$: $u=u_\ell$ per $x\le u_\ell t$, $u=\frac xt$ per $u_\ell t<x\le u_rt$, $u=u_r$ per $x>u_rt$ (L18 p. 4).

## Intuizione
Invece di un salto, il profilo si "stira" linearmente nel tempo: gli stati intermedi tra $u_\ell$ e $u_r$ partono tutti dall'origine con le loro velocità $f'(u)$.

## Come si usa
In $D$ si potrebbe anche "sparpagliare" l'urto in più urti piccoli che rispettano ciascuno R-H (L18 p. 1, esercizio con due o tre urti): le soluzioni deboli non sono uniche. Il criterio di entropia sceglie la rarefazione: per $f''>0$ è entropica quando $u_\ell<u_r$; per $f''<0$ quando $u_\ell>u_r$ (L19 p. 6, verifica per esercizio).

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonti `triennale/ANNO 3/eq fisica matematica/18 - Lezione 17_11_23.pdf` (pp. 1-4); `triennale/ANNO 3/eq fisica matematica/19 - Lezione 21_11_23.pdf` (p. 6).

## Prerequisiti
- [[Problema di Riemann]]: caso u_ℓ < u_r con f'' > 0
- [[Metodo delle caratteristiche]]: la regione D non è raggiunta dalle caratteristiche
- [[Soluzione debole di una legge di conservazione]]: la rarefazione non è derivabile

## Porta a
- [[Soluzione entropica]]: la rarefazione è la soluzione entropica in questo caso
- [[Equazione di Buckley-Leverett]]: rarefazione seguita da un urto

## Collegati
- [[Onda d'urto]]: l'altra soluzione possibile, discontinua
