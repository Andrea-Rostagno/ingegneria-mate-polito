---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["limit of a composite function", "cambio di variabile nei limiti", "continuità della funzione composta"]
tags: [competenza, area/analisi]
---

# Limite della funzione composta

> Il limite di $g(f(x))$ si ottiene sostituendo: se $f(x)\to\ell$ e $g(y)\to m$ per $y\to\ell$, allora $g(f(x))\to m$, purché $g$ sia continua in $\ell$ oppure $f$ non assuma il valore $\ell$ vicino al punto.

## Definizione / enunciato
Sia $A=\operatorname{dom}(g\circ f)$ e $\bar x$ di accumulazione per $A$ (Mazzi, §1.6).

**Teorema 1.11.** Se $\lim_{x\to\bar x}f(x)=\ell\in\mathbb R$ e $g$ è continua in $\ell$, allora $\lim_{x\to\bar x}g(f(x))=g(\ell)=g\big(\lim_{x\to\bar x}f(x)\big)$.

**Corollario 1.11.** Se $f$ è continua in $\bar x$ e $g$ è continua in $f(\bar x)$, allora $g\circ f$ è continua in $\bar x$.

**Teorema 1.12.** Se $\lim_{x\to\bar x}f(x)=\ell$, $\ell$ è di accumulazione per $\operatorname{dom}g$, $\lim_{y\to\ell}g(y)=m$ e **esiste un intorno bucato di $\bar x$ in cui $f(x)\ne\ell$**, allora $\lim_{x\to\bar x}g(f(x))=m$. (Il segno "≠" della condizione 5, perso nell'estrazione del testo, è stato controllato sull'immagine della p. 20.)

## Formule chiave
$$\lim_{x\to\bar x}g(f(x))=\lim_{y\to\ell}g(y)\qquad(y=f(x),\ \ell=\lim_{x\to\bar x}f(x))$$

## Intuizione
È il "cambio di variabile" nei limiti: $y=f(x)$ tende a $\ell$, quindi $g(y)$ fa quello che fa vicino a $\ell$. L'ipotesi in più serve perché la definizione di $\lim_{y\to\ell}g$ ignora il valore $g(\ell)$, mentre $f$ potrebbe cadere proprio in $\ell$.

## Come si usa
Esempi di Mazzi (es. dopo il teor. 1.12) su $h(x)=e^{1/x}$: $\lim_{x\to\pm\infty}e^{1/x}=e^0=1$ (teor. 1.11, $g(y)=e^y$ continua in $0$); $\lim_{x\to0^+}e^{1/x}=\lim_{y\to+\infty}e^y=+\infty$ e $\lim_{x\to0^-}e^{1/x}=\lim_{y\to-\infty}e^y=0$ (teor. 1.12), quindi $\lim_{x\to0}e^{1/x}$ non esiste; inoltre $\lim_{x\to+\infty}e^{x^2}=+\infty$. Mazzi mostra con due controesempi che, senza ipotesi aggiuntive, la tesi è falsa. È anche lo strumento per usare i limiti notevoli con argomento $g(x)\to0$, e per i limiti di $f(x)^{g(x)}=e^{g(x)\log f(x)}$ (§1.6.1).

## Nei corsi
- **Analisi 1** (triennale): "teorema sui limiti di funzioni composte". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (§1.6, teor. 1.11-1.12, cor. 1.11, oss. 1.5, §1.6.1, pp. 19-23); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 3.2.9, PDF p. 97).

## Prerequisiti
- [[Limite di funzione]]: definizioni annidate
- [[Funzione composta e funzione inversa]]: dominio della composta

## Porta a
- [[Caratterizzazione sequenziale del limite]]: la dimostrazione usa il teor. 1.12

## Collegati
- [[Funzione continua]]: composta di continue è continua
