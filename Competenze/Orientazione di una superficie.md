---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["surface orientation", "superficie orientata", "versore normale", "unit normal vector", "nastro di Möbius", "Möbius strip", "normale uscente", "superficie orientabile"]
tags: [competenza, area/analisi]
---

# Orientazione di una superficie

> Orientare una superficie regolare vuol dire scegliere con continuità uno dei due versori normali $\pm\frac{P_u\wedge P_v}{\|P_u\wedge P_v\|}$; non tutte le superfici lo permettono globalmente.

## Definizione / enunciato
Per una superficie regolare
$$\hat n(u,v)=\frac{P_u\wedge P_v}{\|P_u\wedge P_v\|}$$
è uno dei due versori normali; l'altro è $-\hat n=\frac{P_v\wedge P_u}{\|P_v\wedge P_u\|}$. Se si vuole $\hat n$ continuo sono possibili solo queste due scelte; la superficie è **orientata** dopo averne fatta una.

## Formule chiave
Grafico $z=g(x,y)$:
$$\hat n(x,y)=\frac{(-g_x,-g_y,1)}{\sqrt{\|\nabla g\|^2+1}}\quad\text{(punta verso l'alto)},\qquad -\hat n=\frac{(g_x,g_y,-1)}{\sqrt{\|\nabla g\|^2+1}}.$$
Negli esercizi "la normale forma un angolo acuto con $\hat k$" significa la prima.

## Intuizione
Un oggetto geometrico liscio può non essere parametrizzabile come superficie regolare globale: localmente è sempre orientabile, ma il **nastro di Möbius** (rettangolo incollato dopo mezzo giro) non è orientabile globalmente. Il grafico di una funzione $C^1$ invece è sempre orientabile.

## Come si usa
- Cilindro $S(\theta,z)=(R\cos\theta,R\sin\theta,z)$: $\hat n=(\cos\theta,\sin\theta,0)$, la normale uscente.
- Paraboloide $z=4x^2+2y^2$ nel punto $(1,-1,6)$: $\hat n=\frac{(-8,4,1)}{\sqrt{81}}=\big(-\frac89,\frac49,\frac19\big)$ (angolo acuto con $\hat k$), l'altro è $\big(\frac89,-\frac49,-\frac19\big)$.
- L'orientazione decide il segno del flusso e il verso del bordo in Stokes.

## Nei corsi
- **Analisi 2** (triennale): lezione del 16/11/2022. Fonte: `triennale/ANNO 2/analisi 2/AII 14 2022 superfici e integrali.pdf` (pp. 2-12).

## Prerequisiti
- [[Superficie parametrica]]: scelta del versore normale

## Porta a
- [[Flusso di un campo vettoriale]]: verso della normale nel flusso

## Collegati
- [[Gradiente]]: normale al grafico (-g_x, -g_y, 1)
