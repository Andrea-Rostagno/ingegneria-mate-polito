---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["indeterminate forms", "algebra dei limiti", "aritmetica di R esteso", "forma 0/0", "forma ∞-∞"]
tags: [competenza, area/analisi]
---

# Forme indeterminate

> L'algebra dei limiti dice come combinare limiti noti di somme, prodotti e quozienti; i casi che essa non decide sono le forme indeterminate.

## Definizione / enunciato
Se $a_n\to a$ e $b_n\to b$ reali, allora $a_n\pm b_n\to a\pm b$, $a_nb_n\to ab$ e, se $b\ne0$, $a_n/b_n\to a/b$ (Morandotti, teor. 2.2.10; per funzioni Mazzi §1.4, teor. 1.4-1.7). Con limiti infiniti valgono le regole dell'aritmetica di $\overline{\mathbb R}$ (teor. 2.2.13), ad esempio
$$(+\infty)+(+\infty)=+\infty,\quad (+\infty)+\ell=+\infty,\quad (\pm\infty)\cdot\ell=\pm\operatorname{sgn}(\ell)\infty\ (\ell\ne0),\quad \frac\ell0=\operatorname{sgn}(\ell)\cdot\infty\ (\ell\ne0),\quad \frac\ell\infty=0,\quad \frac{\pm\infty}\ell=\pm\operatorname{sgn}(\ell)\cdot\infty .$$
In particolare: infinitesima per limitata è infinitesima; $1/a_n\to0^\pm$ se $a_n\to\pm\infty$.

Non sono decidibili in modo univoco le **forme indeterminate**
$$[+\infty-\infty],\qquad[0\cdot\infty],\qquad\left[\frac00\right],\qquad\left[\frac\infty\infty\right],$$
a cui si aggiunge $[1^\infty]$, di cui $(1+1/n)^n$ è il prototipo (Morandotti, dopo la def. 2.2.20).

## Formule chiave
$$\lim_{x\to\pm\infty}\frac{a_nx^n+\dots+a_0}{b_mx^m+\dots+b_0}=\frac{a_n}{b_m}\lim_{x\to\pm\infty}x^{n-m}$$
(rapporto di polinomi, dal formulario del corso e da Morandotti §2.2.1).

## Intuizione
"Indeterminata" non vuol dire che il limite non esiste, ma che conoscere i limiti dei pezzi non basta: $n-n\to0$, $n^2-n\to+\infty$, $n-n^2\to-\infty$ sono tutte forme $\infty-\infty$.

## Come si usa
Si trasforma l'espressione (raccoglimenti, razionalizzazioni, limiti notevoli, simboli di Landau, gerarchia degli infiniti, de l'Hôpital) finché la forma non è più indeterminata. Morandotti (§2.2.1, es. 1): $\lim\frac{n+a}{n+b}$ è $\infty/\infty$ e si risolve raccogliendo $n$. Esercizi tipo: esercitazioni 6-8 (2022-23, "calcolo di limiti").

## Nei corsi
- **Analisi 1** (triennale): "algebra dei limiti, forme indeterminate". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 2.2.10-2.2.13, oss. 2.2.14, §2.2.1, PDF pp. 63-68); `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (§1.4, pp. 8-15); `triennale/ANNO 1/analisi 1/Esercitazioni 2022-23 (con svolti)/Esercitazione_06.pdf`, `Esercitazione_07.pdf`, `Esercitazione_08.pdf`.

## Prerequisiti
- [[Limite di funzione]]: regole di somma, prodotto, quoziente
- [[Limite di successione]]: teoremi algebrici per successioni

## Porta a
- [[Teorema di de l'Hôpital]]: risolve 0/0 e ∞/∞
- [[Limiti notevoli]]: i limiti notevoli sciolgono forme 0/0 e 1^∞

## Collegati
- Nessuno.
