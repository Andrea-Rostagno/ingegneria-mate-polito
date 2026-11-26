---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["Theorema Egregium", "teorema egregio di Gauss", "Gauss's Theorema Egregium", "invariante isometrico", "isometric invariant"]
tags: [competenza, area/algebra-geometria]
---

# Teorema Egregio

> La curvatura gaussiana dipende solo dalla prima forma fondamentale, quindi due superfici con metriche isometriche hanno la stessa $K$. Per questo un cilindro si srotola sul piano e una sfera no.

## Definizione / enunciato
**Teorema (Egregio di Gauss, senza dimostrazione).** La curvatura gaussiana dipende solo dalla prima forma fondamentale ed è indipendente dalla seconda. Quindi è un **invariante isometrico**.

**Definizione.** Siano $\tilde\Omega,\Omega$ aperti di $\mathbb R^n$. Una metrica $\tilde g$ su $\tilde\Omega$ e una metrica $g$ su $\Omega$ sono **isometriche** se esiste $f:\tilde\Omega\to\Omega$ biunivoca con $\tilde g=f^*(g)$.

## Formule chiave
Per un cambio di coordinate $f:(x,y)\mapsto(u(x,y),v(x,y))$:
$$f^*(du^2+dv^2)=(u_x^2+v_x^2)\,dx^2+2(u_xu_y+v_xv_y)\,dx\,dy+(u_y^2+v_y^2)\,dy^2 .$$
Ogni superficie che ha questa espressione come prima forma fondamentale ha $K=0$.

## Intuizione
$K=\det b/\det g$ sembra dipendere dalla seconda forma, quindi da come la superficie sta nello spazio. Il teorema dice che invece si può calcolare "da dentro", misurando solo lunghezze sulla superficie. Piegare senza stirare non cambia $K$.

## Come si usa
Esempio della lezione:
- Il piano $z=0$, con $P=(u,v,0)$, ha $g_S=du^2+dv^2$.
- Con $(\tilde u,\tilde v)\mapsto(r\tilde u,\tilde v)$ questa diventa $r^2d\tilde u^2+d\tilde v^2$, che è la metrica del cilindro.
- Le due metriche sono isometriche, e infatti entrambe le superfici hanno $K=0$.

Viceversa, la calotta sferica ($K=1/r^2$) non è isometrica a nessun pezzo di piano: è la domanda dello "srotolare" posta nell'introduzione (L01 p. 4).

## Nei corsi
- **Geometria differenziale** (triennale): fonti `triennale/ANNO 2/geometria differenziale/Lezione21_GD.pdf` (pp. 21-23); `triennale/ANNO 2/geometria differenziale/Lezione01_GD.pdf` (p. 4).

## Prerequisiti
- [[Curvatura gaussiana]]: l'invariante di cui si parla
- [[Prima forma fondamentale]]: K dipende solo da E, F, G
- [[Metrica riemanniana]]: nozione di metriche isometriche
- [[Pull-back]]: l'isometria è g̃ = f^*(g)

## Porta a
- Nessuno.

## Collegati
- [[Teorema di Gauss-Bonnet]]: l'altro risultato globale sulla curvatura gaussiana
